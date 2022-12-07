// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "SaveUgcReq.proto" (syntax proto3)
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
import { UgcMusicBriefInfo } from "./UgcMusicBriefInfo";
import { UgcMusicRecord } from "./UgcMusicRecord";
import { UgcType } from "./UgcType";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 6344;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message SaveUgcReq
 */
export interface SaveUgcReq {
    /**
     * @generated from protobuf field: UgcType ugc_type = 3;
     */
    ugcType: UgcType;
    /**
     * @generated from protobuf oneof: record
     */
    record: {
        oneofKind: "musicRecord";
        /**
         * @generated from protobuf field: UgcMusicRecord music_record = 11;
         */
        musicRecord: UgcMusicRecord;
    } | {
        oneofKind: undefined;
    };
    /**
     * @generated from protobuf oneof: brief
     */
    brief: {
        oneofKind: "musicBriefInfo";
        /**
         * @generated from protobuf field: UgcMusicBriefInfo music_brief_info = 260;
         */
        musicBriefInfo: UgcMusicBriefInfo;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class SaveUgcReq$Type extends MessageType<SaveUgcReq> {
    constructor() {
        super("SaveUgcReq", [
            { no: 3, name: "ugc_type", kind: "enum", T: () => ["UgcType", UgcType, "UGC_TYPE_"] },
            { no: 11, name: "music_record", kind: "message", oneof: "record", T: () => UgcMusicRecord },
            { no: 260, name: "music_brief_info", kind: "message", oneof: "brief", T: () => UgcMusicBriefInfo }
        ]);
    }
    create(value?: PartialMessage<SaveUgcReq>): SaveUgcReq {
        const message = { ugcType: 0, record: { oneofKind: undefined }, brief: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SaveUgcReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SaveUgcReq): SaveUgcReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* UgcType ugc_type */ 3:
                    message.ugcType = reader.int32();
                    break;
                case /* UgcMusicRecord music_record */ 11:
                    message.record = {
                        oneofKind: "musicRecord",
                        musicRecord: UgcMusicRecord.internalBinaryRead(reader, reader.uint32(), options, (message.record as any).musicRecord)
                    };
                    break;
                case /* UgcMusicBriefInfo music_brief_info */ 260:
                    message.brief = {
                        oneofKind: "musicBriefInfo",
                        musicBriefInfo: UgcMusicBriefInfo.internalBinaryRead(reader, reader.uint32(), options, (message.brief as any).musicBriefInfo)
                    };
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
    internalBinaryWrite(message: SaveUgcReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* UgcType ugc_type = 3; */
        if (message.ugcType !== 0)
            writer.tag(3, WireType.Varint).int32(message.ugcType);
        /* UgcMusicRecord music_record = 11; */
        if (message.record.oneofKind === "musicRecord")
            UgcMusicRecord.internalBinaryWrite(message.record.musicRecord, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* UgcMusicBriefInfo music_brief_info = 260; */
        if (message.brief.oneofKind === "musicBriefInfo")
            UgcMusicBriefInfo.internalBinaryWrite(message.brief.musicBriefInfo, writer.tag(260, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SaveUgcReq
 */
export const SaveUgcReq = new SaveUgcReq$Type();