// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "BartenderStartLevelRsp.proto" (syntax proto3)
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
 *   CMD_ID = 8142;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message BartenderStartLevelRsp
 */
export interface BartenderStartLevelRsp {
    /**
     * @generated from protobuf field: uint32 level_id = 8;
     */
    levelId: number;
    /**
     * @generated from protobuf field: repeated uint32 order_list = 12;
     */
    orderList: number[];
    /**
     * @generated from protobuf field: int32 retcode = 11;
     */
    retcode: number;
    /**
     * @generated from protobuf field: uint32 time = 14;
     */
    time: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class BartenderStartLevelRsp$Type extends MessageType<BartenderStartLevelRsp> {
    constructor() {
        super("BartenderStartLevelRsp", [
            { no: 8, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "order_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<BartenderStartLevelRsp>): BartenderStartLevelRsp {
        const message = { levelId: 0, orderList: [], retcode: 0, time: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BartenderStartLevelRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BartenderStartLevelRsp): BartenderStartLevelRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 level_id */ 8:
                    message.levelId = reader.uint32();
                    break;
                case /* repeated uint32 order_list */ 12:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.orderList.push(reader.uint32());
                    else
                        message.orderList.push(reader.uint32());
                    break;
                case /* int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 time */ 14:
                    message.time = reader.uint32();
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
    internalBinaryWrite(message: BartenderStartLevelRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 level_id = 8; */
        if (message.levelId !== 0)
            writer.tag(8, WireType.Varint).uint32(message.levelId);
        /* repeated uint32 order_list = 12; */
        if (message.orderList.length) {
            writer.tag(12, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.orderList.length; i++)
                writer.uint32(message.orderList[i]);
            writer.join();
        }
        /* int32 retcode = 11; */
        if (message.retcode !== 0)
            writer.tag(11, WireType.Varint).int32(message.retcode);
        /* uint32 time = 14; */
        if (message.time !== 0)
            writer.tag(14, WireType.Varint).uint32(message.time);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BartenderStartLevelRsp
 */
export const BartenderStartLevelRsp = new BartenderStartLevelRsp$Type();
