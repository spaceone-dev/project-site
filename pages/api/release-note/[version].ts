import { getData } from '../../../lib/github';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function versionHandler({ query: { version } }, res: any) {
    (async () => {
        console.debug('version', version);
        let noteData = '';
        try {
            if (version) {
                noteData = await getData(version);
            } else {
                res.status(400).json({
                    noteData,
                });
            }
        } catch (e) {
            console.error(e);
            res.status(500).json({
                noteData,
            });
        }

        res.status(200).json({
            noteData,
        });
    })();
}
