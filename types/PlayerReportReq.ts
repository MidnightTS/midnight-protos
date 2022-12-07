// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "PlayerReportReq.proto" (syntax proto3)
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
import { ReportReasonType } from "./ReportReasonType";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 4022;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message PlayerReportReq
 */
export interface PlayerReportReq {
    /**
     * @generated from protobuf field: string target_home_module_name = 5;
     */
    targetHomeModuleName: string;
    /**
     * @generated from protobuf field: uint32 target_uid = 10;
     */
    targetUid: number;
    /**
     * @generated from protobuf field: ReportReasonType reason = 7;
     */
    reason: ReportReasonType;
    /**
     * @generated from protobuf field: string content = 11;
     */
    content: string;
    /**
     * @generated from protobuf field: uint32 target_home_module_id = 15;
     */
    targetHomeModuleId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class PlayerReportReq$Type extends MessageType<PlayerReportReq> {
    constructor() {
        super("PlayerReportReq", [
            { no: 5, name: "target_home_module_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "target_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "reason", kind: "enum", T: () => ["ReportReasonType", ReportReasonType, "REPORT_REASON_TYPE_"] },
            { no: 11, name: "content", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "target_home_module_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<PlayerReportReq>): PlayerReportReq {
        const message = { targetHomeModuleName: "", targetUid: 0, reason: 0, content: "", targetHomeModuleId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlayerReportReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerReportReq): PlayerReportReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string target_home_module_name */ 5:
                    message.targetHomeModuleName = reader.string();
                    break;
                case /* uint32 target_uid */ 10:
                    message.targetUid = reader.uint32();
                    break;
                case /* ReportReasonType reason */ 7:
                    message.reason = reader.int32();
                    break;
                case /* string content */ 11:
                    message.content = reader.string();
                    break;
                case /* uint32 target_home_module_id */ 15:
                    message.targetHomeModuleId = reader.uint32();
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
    internalBinaryWrite(message: PlayerReportReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string target_home_module_name = 5; */
        if (message.targetHomeModuleName !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.targetHomeModuleName);
        /* uint32 target_uid = 10; */
        if (message.targetUid !== 0)
            writer.tag(10, WireType.Varint).uint32(message.targetUid);
        /* ReportReasonType reason = 7; */
        if (message.reason !== 0)
            writer.tag(7, WireType.Varint).int32(message.reason);
        /* string content = 11; */
        if (message.content !== "")
            writer.tag(11, WireType.LengthDelimited).string(message.content);
        /* uint32 target_home_module_id = 15; */
        if (message.targetHomeModuleId !== 0)
            writer.tag(15, WireType.Varint).uint32(message.targetHomeModuleId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerReportReq
 */
export const PlayerReportReq = new PlayerReportReq$Type();