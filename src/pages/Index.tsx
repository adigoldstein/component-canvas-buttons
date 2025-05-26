
import ButtonShowcase from "@/components/ButtonShowcase";
import AppTextInputShowcase from "@/components/AppTextInputShowcase";
import StepperShowcase from "@/components/StepperShowcase";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <div className="mb-12">
          <StepperShowcase />
        </div>
        <div className="border-t pt-12 mb-12">
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
