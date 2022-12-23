// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "CompoundDataNotify.proto" (syntax proto3)
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
import { CompoundQueueData } from "./CompoundQueueData";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 164;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message CompoundDataNotify
 */
export interface CompoundDataNotify {
    /**
     * @generated from protobuf field: repeated CompoundQueueData compound_queue_data_list = 7;
     */
    compoundQueueDataList: CompoundQueueData[];
    /**
     * @generated from protobuf field: repeated uint32 unlock_compound_list = 11;
     */
    unlockCompoundList: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class CompoundDataNotify$Type extends MessageType<CompoundDataNotify> {
    constructor() {
        super("CompoundDataNotify", [
            { no: 7, name: "compound_queue_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CompoundQueueData },
            { no: 11, name: "unlock_compound_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<CompoundDataNotify>): CompoundDataNotify {
        const message = { compoundQueueDataList: [], unlockCompoundList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CompoundDataNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CompoundDataNotify): CompoundDataNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated CompoundQueueData compound_queue_data_list */ 7:
                    message.compoundQueueDataList.push(CompoundQueueData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 unlock_compound_list */ 11:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockCompoundList.push(reader.uint32());
                    else
                        message.unlockCompoundList.push(reader.uint32());
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
    internalBinaryWrite(message: CompoundDataNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated CompoundQueueData compound_queue_data_list = 7; */
        for (let i = 0; i < message.compoundQueueDataList.length; i++)
            CompoundQueueData.internalBinaryWrite(message.compoundQueueDataList[i], writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 unlock_compound_list = 11; */
        if (message.unlockCompoundList.length) {
            writer.tag(11, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockCompoundList.length; i++)
                writer.uint32(message.unlockCompoundList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CompoundDataNotify
 */
export const CompoundDataNotify = new CompoundDataNotify$Type();
