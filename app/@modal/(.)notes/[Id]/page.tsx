import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";
import { useParams, useRouter } from "next/navigation";

const NoteModalPage = () => {
  const params = useParams();
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  return (
    <Modal closeModal={closeModal}>
      <NotePreview id={Number(params.id)} />
    </Modal>
  );
};

export default NoteModalPage;
