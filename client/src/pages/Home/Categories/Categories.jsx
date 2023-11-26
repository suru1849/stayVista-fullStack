import { useSearchParams } from "react-router-dom";
import Container from "../../../components/Shared/Container";
import CategorieBox from "./CategorieBox";
import { categories } from "./categoriesData";

const Categories = () => {
  const [params] = useSearchParams();
  const category = params.get("category");

  return (
    <Container>
      <div className="pt-4 flex justify-between items-center overflow-x-auto ">
        {categories?.map((categorie) => (
          <CategorieBox
            key={categorie.label}
            label={categorie.label}
            icon={categorie.icon}
            selected={category === categorie.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
