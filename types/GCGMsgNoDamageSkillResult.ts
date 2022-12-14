// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GCGMsgNoDamageSkillResult.proto" (syntax proto3)
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
import { GCGDamageDetail } from "./GCGDamageDetail";
/**
 * @generated from protobuf message GCGMsgNoDamageSkillResult
 */
export interface GCGMsgNoDamageSkillResult {
    /**
     * @generated from protobuf field: uint32 Unk3300_LPGLOCDDPCL = 7 [json_name = "Unk3300LPGLOCDDPCL"];
     */
    unk3300LPGLOCDDPCL: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_EPNDCIAJOJP = 6 [json_name = "Unk3300EPNDCIAJOJP"];
     */
    unk3300EPNDCIAJOJP: number;
    /**
     * @generated from protobuf field: uint32 target_card_guid = 3;
     */
    targetCardGuid: number;
    /**
     * @generated from protobuf field: repeated GCGDamageDetail detail_list = 14;
     */
    detailList: GCGDamageDetail[];
    /**
     * @generated from protobuf field: uint32 skill_id = 13;
     */
    skillId: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_NNJAOEHNPPD = 4 [json_name = "Unk3300NNJAOEHNPPD"];
     */
    unk3300NNJAOEHNPPD: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_NIGDCIGLAKE = 11 [json_name = "Unk3300NIGDCIGLAKE"];
     */
    unk3300NIGDCIGLAKE: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgNoDamageSkillResult$Type extends MessageType<GCGMsgNoDamageSkillResult> {
    constructor() {
        super("GCGMsgNoDamageSkillResult", [
            { no: 7, name: "Unk3300_LPGLOCDDPCL", kind: "scalar", jsonName: "Unk3300LPGLOCDDPCL", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_EPNDCIAJOJP", kind: "scalar", jsonName: "Unk3300EPNDCIAJOJP", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "target_card_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "detail_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGDamageDetail },
            { no: 13, name: "skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_NNJAOEHNPPD", kind: "scalar", jsonName: "Unk3300NNJAOEHNPPD", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_NIGDCIGLAKE", kind: "scalar", jsonName: "Unk3300NIGDCIGLAKE", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GCGMsgNoDamageSkillResult>): GCGMsgNoDamageSkillResult {
        const message = { unk3300LPGLOCDDPCL: 0, unk3300EPNDCIAJOJP: 0, targetCardGuid: 0, detailList: [], skillId: 0, unk3300NNJAOEHNPPD: 0, unk3300NIGDCIGLAKE: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GCGMsgNoDamageSkillResult>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GCGMsgNoDamageSkillResult): GCGMsgNoDamageSkillResult {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_LPGLOCDDPCL = 7 [json_name = "Unk3300LPGLOCDDPCL"];*/ 7:
                    message.unk3300LPGLOCDDPCL = reader.uint32();
                    break;
                case /* uint32 Unk3300_EPNDCIAJOJP = 6 [json_name = "Unk3300EPNDCIAJOJP"];*/ 6:
                    message.unk3300EPNDCIAJOJP = reader.uint32();
                    break;
                case /* uint32 target_card_guid */ 3:
                    message.targetCardGuid = reader.uint32();
                    break;
                case /* repeated GCGDamageDetail detail_list */ 14:
                    message.detailList.push(GCGDamageDetail.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 skill_id */ 13:
                    message.skillId = reader.uint32();
                    break;
                case /* uint32 Unk3300_NNJAOEHNPPD = 4 [json_name = "Unk3300NNJAOEHNPPD"];*/ 4:
                    message.unk3300NNJAOEHNPPD = reader.uint32();
                    break;
                case /* uint32 Unk3300_NIGDCIGLAKE = 11 [json_name = "Unk3300NIGDCIGLAKE"];*/ 11:
                    message.unk3300NIGDCIGLAKE = reader.uint32();
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
    internalBinaryWrite(message: GCGMsgNoDamageSkillResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_LPGLOCDDPCL = 7 [json_name = "Unk3300LPGLOCDDPCL"]; */
        if (message.unk3300LPGLOCDDPCL !== 0)
            writer.tag(7, WireType.Varint).uint32(message.unk3300LPGLOCDDPCL);
        /* uint32 Unk3300_EPNDCIAJOJP = 6 [json_name = "Unk3300EPNDCIAJOJP"]; */
        if (message.unk3300EPNDCIAJOJP !== 0)
            writer.tag(6, WireType.Varint).uint32(message.unk3300EPNDCIAJOJP);
        /* uint32 target_card_guid = 3; */
        if (message.targetCardGuid !== 0)
            writer.tag(3, WireType.Varint).uint32(message.targetCardGuid);
        /* repeated GCGDamageDetail detail_list = 14; */
        for (let i = 0; i < message.detailList.length; i++)
            GCGDamageDetail.internalBinaryWrite(message.detailList[i], writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        /* uint32 skill_id = 13; */
        if (message.skillId !== 0)
            writer.tag(13, WireType.Varint).uint32(message.skillId);
        /* uint32 Unk3300_NNJAOEHNPPD = 4 [json_name = "Unk3300NNJAOEHNPPD"]; */
        if (message.unk3300NNJAOEHNPPD !== 0)
            writer.tag(4, WireType.Varint).uint32(message.unk3300NNJAOEHNPPD);
        /* uint32 Unk3300_NIGDCIGLAKE = 11 [json_name = "Unk3300NIGDCIGLAKE"]; */
        if (message.unk3300NIGDCIGLAKE !== 0)
            writer.tag(11, WireType.Varint).uint32(message.unk3300NIGDCIGLAKE);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGMsgNoDamageSkillResult
 */
export const GCGMsgNoDamageSkillResult = new GCGMsgNoDamageSkillResult$Type();
