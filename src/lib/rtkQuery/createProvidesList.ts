interface EntityWithId {
    id: number | string;
}

interface ResultWithItems<T> {
    results: T[];
}

export const createProvidesList =
    <T extends EntityWithId, K extends string>(
        tag: K,
        listId: string | number = "LIST"
    ) =>
    (result: ResultWithItems<T> | undefined) => {
        // Создаем базовый тег для всего списка
        const baseTag = { type: tag, id: listId } as const;

        if (!result || !result.results) {
            return [baseTag];
        }

        // Возвращаем массив тегов для каждого элемента + тег для списка
        return [
            ...result.results.map(({ id }) => ({ type: tag, id } as const)),
            baseTag,
        ];
    };
