// Получение всех упражнений
export const getExercises = '/api/Exercize/GetExercizes';

// Получение всех упражнений по ID
export const getExercisesById = '/api/Exercize/GetExercize';

// Получение упражнения для редактирования по ID
export const getLevelForEditing = '/api/Exercize/GetExercizeForEditing/';

// Получение уровней сложности
export const getDifficultyLevel = '/api/Exercize/GetDifficultyLevel/';


// Отправка нового упражнения на сервер
export const addExercise = "/api/Exercize/AddExercize";

// Отправка отредактированного упражнения на сервер
export const updateExercize = "/api/Exercize/UpdateExercize";

// Получение данных об уровнях сложности
// export const addExercise = "/api/Exercize/GetDifficultyLevel/{id}";
// Ссылки связанные со статистикой
export const getStatistics = '/api/Statistics/GetStatistics';

export const getStatisticsByUserId = '/api/Statistics/getStatisticsByUserId/';

export const getStatisticsByExerciseId = '/api/Statistics/getStatisticsByExerciseId/';