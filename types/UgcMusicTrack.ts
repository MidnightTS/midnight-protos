// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "UgcMusicTrack.proto" (syntax proto3)
// tslint:disable
//
// Sorapointa - A server software re-implementation for a certain anime game, and avoid sorapointa.
// Copyright (C) 2022  Sorapointa Team
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { UgcMusicNote } from "./UgcMusicNote";
/**
 * @generated from protobuf message UgcMusicTrack
 */
export interface UgcMusicTrack {
    /**
     * @generated from protobuf field: repeated UgcMusicNote music_note_list = 6;
     */
    musicNoteList: UgcMusicNote[];
}
// @generated message type with reflection information, may provide speed optimized methods
class UgcMusicTrack$Type extends MessageType<UgcMusicTrack> {
    constructor() {
        super("UgcMusicTrack", [
            { no: 6, name: "music_note_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => UgcMusicNote }
        ]);
    }
    create(value?: PartialMessage<UgcMusicTrack>): UgcMusicTrack {
        const message = { musicNoteList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UgcMusicTrack>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UgcMusicTrack): UgcMusicTrack {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated UgcMusicNote music_note_list */ 6:
                    message.musicNoteList.push(UgcMusicNote.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UgcMusicTrack, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated UgcMusicNote music_note_list = 6; */
        for (let i = 0; i < message.musicNoteList.length; i++)
            UgcMusicNote.internalBinaryWrite(message.musicNoteList[i], writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UgcMusicTrack
 */
export const UgcMusicTrack = new UgcMusicTrack$Type();
