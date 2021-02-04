import { getData, getNoteTree, getRootSha } from '../../lib/github';

export default function noteListHandler(req, res) {
  (async () => {
    let noteList = [];
    let noteVersion = '';
    let noteData = '';
    try {
      const sha = await getRootSha();
      noteList = await getNoteTree(sha);
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
