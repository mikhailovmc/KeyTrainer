import { useState } from "react";
import Select, { components } from "react-select";
import "./styles.css";

const InputOption = ({
    getStyles,
    Icon,
    isDisabled,
    isFocused,
    isSelected,
    children,
    innerProps,
    ...rest
}) => {
    const [isActive, setIsActive] = useState(false);
    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);
    const onMouseLeave = () => setIsActive(false);

    // styles
    let bg = "transparent";
    if (isFocused) bg = "#eee";
    if (isActive) bg = "#B2D4FF";

    const style = {
        alignItems: "center",
        backgroundColor: bg,
        color: "inherit",
        display: "flex "
    };

    // prop assignment
    const props = {
        ...innerProps,
        onMouseDown,
        onMouseUp,
        onMouseLeave,
        style
    };

    return (
        <components.Option
            {...rest}
            isDisabled={isDisabled}
            isFocused={isFocused}
            isSelected={isSelected}
            getStyles={getStyles}
            innerProps={props}
        >
            {children}
        </components.Option>
    );
};

export default function CheckBoxes({ allOptions, setSelected }) {
    const [selectedOptions, setSelectedOptions] = useState([]);

    return (
        <div className="checkBoxes">
            <Select
                defaultValue={[]}
                isSingle
                closeMenuOnSelect={true}
                hideSelectedOptions={false}
                onChange={(options) => {
                    setSelectedOptions(options.value);
                }}
                options={allOptions}
                components={{
                    Option: InputOption
                }}
            />
            {setSelected(selectedOptions)}
        </div>
    );
}
