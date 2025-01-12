import React from 'react';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, LevelFormat, Alignment, AlignmentType } from 'docx';
import { saveAs } from 'file-saver';

function CreateHeading() {
    const generate = () => {
        const doc = new Document({
            sections: [
                {
                    properties: {},
                    children: [
                        new Paragraph({
                            text: "Heading Level 1",
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({
                            text: "Heading Level 2",
                            heading: HeadingLevel.HEADING_2,
                        }),
                        new Paragraph({
                            text: "Heading Level 3",
                            heading: HeadingLevel.HEADING_3,
                        }),
                        ...renderOrderedList(["Item 1", "Item 2", "Item 3"]),
                    ],
                    numbering: {
                        config: [
                            {
                                reference: "my-numbering",
                                levels: [
                                    {
                                        level: 0,
                                        format: LevelFormat.UPPER_ROMAN,
                                        text: "%1",
                                        alignment: "left",
                                        style: {
                                            paragraph: {
                                                indent: { left: 2880, hanging: 2420 }
                                            }
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
            ],
        });

        Packer.toBlob(doc).then(blob => {
            console.log(blob);
            saveAs(blob, "example.docx");
            console.log("Document created successfully");
        });
    };

    const renderOrderedList = (items) => {
        return items.map((item, index) => new Paragraph({
            text: item,
            numbering: {
                reference: "my-numbering",
                levels : [
                    {
                        level : 0,
                        format : LevelFormat.UPPER_ROMAN,
                        text : "%1",
                        alignment : AlignmentType.START
                    }
                ],
            },
        }));
    };

    return (
        <div onClick={generate}>download heading level</div>
    );
}

export default CreateHeading;