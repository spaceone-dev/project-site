import { getData, getNoteTree, getRootSha } from '../../lib/github';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function noteListHandler(req: any, res: any) {
  (async () => {
    let noteList = [];
    let noteVersion = '';
    let noteData = '';
    try {
      const sha = await getRootSha();
      noteList = await getNoteTree(sha);
      noteList.reverse();
      noteVersion = noteList[0] || '';
      if (noteVersion) noteData = await getData(noteVersion);
    } catch (e) {
      console.error(e);
      res.statusCode = 500;
      res.json({
        noteList, noteVersion, noteData,
      });
    }

    res.statusCode = 200;
    res.json({
      noteList, noteVersion, noteData,
    });
  })();
}
