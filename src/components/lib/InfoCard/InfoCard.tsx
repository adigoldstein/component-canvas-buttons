
import React from 'react';
import { cn } from '@/lib/utils';

type InfoCardProps = {
  title?: string;
  titleAlign?: "left" | "center";
  icon?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  titleAlign = "left",
  icon,
  footer,
  className,
  children,
}) => {
  const titleAlignmentClass = titleAlign === "center" ? "text-center" : "text-left";

  return (
    <div
      className={cn(
        "bg-white rounded-lg border shadow-sm p-6",
        className
      )}
    >
      {/* Header Section */}
      {(title || icon) && (
        <div className={cn("mb-4", titleAlignmentClass)}>
          <div className="flex items-center gap-2 justify-start">
            {titleAlign === "center" && <div className="flex-1" />}
            {icon && <div className="flex-shrink-0">{icon}</div>}
            {title && (
              <h3 className="text-lg font-semibold text-gray-900">
                {title}
              </h3>
            )}
            {titleAlign === "center" && <div className="flex-1" />}
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="flex-1">
        {children}
      </div>

      {/* Footer Section */}
      {footer && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          {footer}
        </div>
      )}
    </div>
  );
};

export default InfoCard;
