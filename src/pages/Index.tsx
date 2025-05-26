
import ButtonShowcase from "@/components/ButtonShowcase";
import AppTextInputShowcase from "@/components/AppTextInputShowcase";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <div className="mb-12">
          <AppTextInputShowcase />
        </div>
        <div className="border-t pt-12">
          <ButtonShowcase />
        </div>
      </div>
    </div>
  );
};

export default Index;
