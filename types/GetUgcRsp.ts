// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GetUgcRsp.proto" (syntax proto3)
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
import { RecordUsage } from "./RecordUsage";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 6341;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message GetUgcRsp
 */
export interface GetUgcRsp {
    /**
     * @generated from protobuf field: int32 retcode = 10;
     */
    retcode: number;
    /**
     * @generated from protobuf field: RecordUsage ugc_record_usage = 5;
     */
    ugcRecordUsage: RecordUsage;
    /**
     * @generated from protobuf field: UgcType ugc_type = 6;
     */
    ugcType: UgcType;
    /**
     * @generated from protobuf field: uint64 ugc_guid = 3;
     */
    ugcGuid: bigint;
    /**
     * @generated from protobuf oneof: record
     */
    record: {
        oneofKind: "musicRecord";
        /**
         * @generated from protobuf field: UgcMusicRecord music_record = 2;
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
         * @generated from protobuf field: UgcMusicBriefInfo music_brief_info = 1540;
         */
        musicBriefInfo: UgcMusicBriefInfo;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class GetUgcRsp$Type extends MessageType<GetUgcRsp> {
    constructor() {
        super("GetUgcRsp", [
            { no: 10, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "ugc_record_usage", kind: "enum", T: () => ["RecordUsage", RecordUsage, "RECORD_USAGE_"] },
            { no: 6, name: "ugc_type", kind: "enum", T: () => ["UgcType", UgcType, "UGC_TYPE_"] },
            { no: 3, name: "ugc_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "music_record", kind: "message", oneof: "record", T: () => UgcMusicRecord },
            { no: 1540, name: "music_brief_info", kind: "message", oneof: "brief", T: () => UgcMusicBriefInfo }
        ]);
    }
    create(value?: PartialMessage<GetUgcRsp>): GetUgcRsp {
        const message = { retcode: 0, ugcRecordUsage: 0, ugcType: 0, ugcGuid: 0n, record: { oneofKind: undefined }, brief: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetUgcRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetUgcRsp): GetUgcRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 10:
                    message.retcode = reader.int32();
                    break;
                case /* RecordUsage ugc_record_usage */ 5:
                    message.ugcRecordUsage = reader.int32();
                    break;
                case /* UgcType ugc_type */ 6:
                    message.ugcType = reader.int32();
                    break;
                case /* uint64 ugc_guid */ 3:
                    message.ugcGuid = reader.uint64().toBigInt();
                    break;
                case /* UgcMusicRecord music_record */ 2:
                    message.record = {
                        oneofKind: "musicRecord",
                        musicRecord: UgcMusicRecord.internalBinaryRead(reader, reader.uint32(), options, (message.record as any).musicRecord)
                    };
                    break;
                case /* UgcMusicBriefInfo music_brief_info */ 1540:
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
    internalBinaryWrite(message: GetUgcRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 retcode = 10; */
        if (message.retcode !== 0)
            writer.tag(10, WireType.Varint).int32(message.retcode);
        /* RecordUsage ugc_record_usage = 5; */
        if (message.ugcRecordUsage !== 0)
            writer.tag(5, WireType.Varint).int32(message.ugcRecordUsage);
        /* UgcType ugc_type = 6; */
        if (message.ugcType !== 0)
            writer.tag(6, WireType.Varint).int32(message.ugcType);
        /* uint64 ugc_guid = 3; */
        if (message.ugcGuid !== 0n)
            writer.tag(3, WireType.Varint).uint64(message.ugcGuid);
        /* UgcMusicRecord music_record = 2; */
        if (message.record.oneofKind === "musicRecord")
            UgcMusicRecord.internalBinaryWrite(message.record.musicRecord, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* UgcMusicBriefInfo music_brief_info = 1540; */
        if (message.brief.oneofKind === "musicBriefInfo")
            UgcMusicBriefInfo.internalBinaryWrite(message.brief.musicBriefInfo, writer.tag(1540, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetUgcRsp
 */
export const GetUgcRsp = new GetUgcRsp$Type();
