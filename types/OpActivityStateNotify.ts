// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "OpActivityStateNotify.proto" (syntax proto3)
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
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { OpActivityTagBriefInfo } from "./OpActivityTagBriefInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 2579;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message OpActivityStateNotify
 */
export interface OpActivityStateNotify {
    /**
     * @generated from protobuf field: repeated uint32 finished_bonus_activity_id_list = 6;
     */
    finishedBonusActivityIdList: number[];
    /**
     * @generated from protobuf field: repeated OpActivityTagBriefInfo opened_op_activity_info_list = 8;
     */
    openedOpActivityInfoList: OpActivityTagBriefInfo[];
}
// @generated message type with reflection information, may provide speed optimized methods
class OpActivityStateNotify$Type extends MessageType<OpActivityStateNotify> {
    constructor() {
        super("OpActivityStateNotify", [
            { no: 6, name: "finished_bonus_activity_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "opened_op_activity_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => OpActivityTagBriefInfo }
        ]);
    }
    create(value?: PartialMessage<OpActivityStateNotify>): OpActivityStateNotify {
        const message = { finishedBonusActivityIdList: [], openedOpActivityInfoList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<OpActivityStateNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OpActivityStateNotify): OpActivityStateNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 finished_bonus_activity_id_list */ 6:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.finishedBonusActivityIdList.push(reader.uint32());
                    else
                        message.finishedBonusActivityIdList.push(reader.uint32());
                    break;
                case /* repeated OpActivityTagBriefInfo opened_op_activity_info_list */ 8:
                    message.openedOpActivityInfoList.push(OpActivityTagBriefInfo.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: OpActivityStateNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint32 finished_bonus_activity_id_list = 6; */
        if (message.finishedBonusActivityIdList.length) {
            writer.tag(6, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.finishedBonusActivityIdList.length; i++)
                writer.uint32(message.finishedBonusActivityIdList[i]);
            writer.join();
        }
        /* repeated OpActivityTagBriefInfo opened_op_activity_info_list = 8; */
        for (let i = 0; i < message.openedOpActivityInfoList.length; i++)
            OpActivityTagBriefInfo.internalBinaryWrite(message.openedOpActivityInfoList[i], writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message OpActivityStateNotify
 */
export const OpActivityStateNotify = new OpActivityStateNotify$Type();
