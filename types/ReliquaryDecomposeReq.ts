// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ReliquaryDecomposeReq.proto" (syntax proto3)
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
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 631;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message ReliquaryDecomposeReq
 */
export interface ReliquaryDecomposeReq {
    /**
     * @generated from protobuf field: uint32 config_id = 4;
     */
    configId: number;
    /**
     * @generated from protobuf field: uint32 target_count = 15;
     */
    targetCount: number;
    /**
     * @generated from protobuf field: repeated uint64 guid_list = 13;
     */
    guidList: bigint[];
}
// @generated message type with reflection information, may provide speed optimized methods
class ReliquaryDecomposeReq$Type extends MessageType<ReliquaryDecomposeReq> {
    constructor() {
        super("ReliquaryDecomposeReq", [
            { no: 4, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "target_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<ReliquaryDecomposeReq>): ReliquaryDecomposeReq {
        const message = { configId: 0, targetCount: 0, guidList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ReliquaryDecomposeReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ReliquaryDecomposeReq): ReliquaryDecomposeReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 config_id */ 4:
                    message.configId = reader.uint32();
                    break;
                case /* uint32 target_count */ 15:
                    message.targetCount = reader.uint32();
                    break;
                case /* repeated uint64 guid_list */ 13:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.guidList.push(reader.uint64().toBigInt());
                    else
                        message.guidList.push(reader.uint64().toBigInt());
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
    internalBinaryWrite(message: ReliquaryDecomposeReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 config_id = 4; */
        if (message.configId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.configId);
        /* uint32 target_count = 15; */
        if (message.targetCount !== 0)
            writer.tag(15, WireType.Varint).uint32(message.targetCount);
        /* repeated uint64 guid_list = 13; */
        if (message.guidList.length) {
            writer.tag(13, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.guidList.length; i++)
                writer.uint64(message.guidList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReliquaryDecomposeReq
 */
export const ReliquaryDecomposeReq = new ReliquaryDecomposeReq$Type();
