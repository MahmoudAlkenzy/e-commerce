import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getSubCategoriesOfCategory } from '../services/apiCategories';
export function useCategorySubCategories() {
    const {
        data: categorySubCategories,
        isLoading,
        mutate,
    } = useMutation({
        mutationFn: getSubCategoriesOfCategory,
        onSuccess: () => {},
        mutationKey: ['All SubCategories On Category'],
    });
    return { categorySubCategories, isLoading, mutate };
}
