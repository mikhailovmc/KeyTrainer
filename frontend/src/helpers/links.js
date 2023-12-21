// Получение всех упражнений
export const getExercises = 'https://localhost:5001/api/Exercize/GetExercizes';

// Получение всех упражнений по ID пользователя:
export const getExercisesForUser = 'https://localhost:5001/api/Exercize/GetExercizesForUser/';

// Получение всех упражнений по ID
export const getExercisesById = 'https://localhost:5001/api/Exercize/GetExercize';

// Получение нового автоматического упражнения
export const getAutoExercise = "https://localhost:5001/api/Exercize/GenerateExercize";

// Получение упражнения для редактирования по ID
export const getLevelForEditing = 'https://localhost:5001/api/Exercize/GetExercizeForEditing/';

// Получение уровней сложности
export const getDifficultyLevel = 'https://localhost:5001/api/Exercize/GetDifficultyLevel/';

// Отправка нового упражнения на сервер
export const addExercise = "https://localhost:5001/api/Exercize/AddExercize";

// Отправка отредактированного упражнения на сервер
export const updateExercize = "https://localhost:5001/api/Exercize/UpdateExercize";

// Отправка отредактированного уровня сложности на сервер
export const updateDifficultLevel = "https://localhost:5001/api/Exercize/UpdateDifficultyLevel";


// Получение данных об уровнях сложности
// export const addExercise = "https://localhost:5001/api/Exercize/GetDifficultyLevel/{id}";
// Ссылки связанные со статистикой
export const getStatistics = 'https://localhost:5001/api/Statistics/GetStatistics';

export const getStatisticsByUserId = 'https://localhost:5001/api/Statistics/getStatisticsByUserId/';

export const getStatisticsByExerciseId = 'https://localhost:5001/api/Statistics/getStatisticsByExerciseId/';


export const getGraphic = 'https://localhost:5001/api/Statistics/GetGraphic/';

export const getDiagram = 'https://localhost:5001/api/Statistics/GetDiagram/';