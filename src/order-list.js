import { Document, Paragraph, TextRun } from 'docx';

export class DocumentCreatorHeading {
    create(content) {
        const doc = new Document({
            sections: [
                {
                    properties: {},
                    children: [
                        new Paragraph({
                            text: "Heading Level 1",
                            heading: "Heading1",
                        }),
                        ...content.map(item => new Paragraph(item)),
                    ],
                },
            ],
        });
        return doc;
    }
}