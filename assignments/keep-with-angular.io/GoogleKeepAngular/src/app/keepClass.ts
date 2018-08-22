export class KeepClass {
  id: string;
  keepID: number;
  title: string;
  plainText: string;
  checklist: Checklist[];
  label: string;
  ispinned: boolean;
}

export class Checklist {
  checklistID: number;
  item: string;
}
