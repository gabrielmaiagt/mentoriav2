import { db } from "./firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";

export type LeadStatus = "Novo" | "Em conversa" | "Fechado" | "Perdido";

export interface Lead {
  id?: string;
  nome: string;
  telefone: string;
  mentoria: string;
  status: LeadStatus;
  etapaAtual: string;
  createdAt?: Timestamp;
}

export async function saveLead(data: Omit<Lead, "id" | "createdAt">) {
  return addDoc(collection(db, "leads"), {
    ...data,
    createdAt: serverTimestamp(),
  });
}

export async function updateLeadStatus(id: string, status: LeadStatus) {
  return updateDoc(doc(db, "leads", id), { status });
}

export async function getLeads(): Promise<Lead[]> {
  const q = query(collection(db, "leads"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Lead));
}
