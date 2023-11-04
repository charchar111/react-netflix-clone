import { useMatch, useNavigate } from "react-router-dom";
import { ModalOverlay } from "./component";
import { AnimatePresence } from "framer-motion";

export default function ModalPage() {
  const navigate = useNavigate();
  const match = useMatch("/browse/modal/:id");
  console.log(match);
  return (
    <AnimatePresence>
      {match && (
        <ModalOverlay
          onClick={() => navigate("..")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          modal.............
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
}
