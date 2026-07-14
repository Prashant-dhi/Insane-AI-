import { createContext, useContext, useEffect, useState } from "react";

const PlanContext = createContext();

export const usePlan = () => useContext(PlanContext);

export default function PlanProvider({ children }) {
  const [plan, setPlan] = useState(() => {
    return localStorage.getItem("new-ai-plan") || "free";
  });

  useEffect(() => {
    localStorage.setItem("new-ai-plan", plan);
  }, [plan]);

  return (
    <PlanContext.Provider
      value={{
        plan,
        setPlan,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}