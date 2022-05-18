import useSWR from "swr";
import categoriesService, {
  CategoryType,
} from "../../../services/categoriesService";
import SwrSpinner from "../../common/swrSpinner";
import ListCategoriesSlide from "./listCategoriesSlide";

const ListCategories = function () {
  const { data, error } = useSWR(
    "/categories",
    categoriesService.getCategories
  );

  if (error) return error;
  if (!data) return <SwrSpinner />;
  return (
    <>
      {data.data.categories?.map((category: CategoryType) => (
        <ListCategoriesSlide
          key={category.id}
          categoryId={category.id}
          categoryName={category.name}
        />
      ))}
    </>
  );
};

export default ListCategories;
