// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "BartenderCompleteOrderRsp.proto" (syntax proto3)
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
 *   CMD_ID = 8870;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message BartenderCompleteOrderRsp
 */
export interface BartenderCompleteOrderRsp {
    /**
     * @generated from protobuf field: uint32 formula_id = 9;
     */
    formulaId: number;
    /**
     * @generated from protobuf field: uint32 quest_id = 7;
     */
    questId: number;
    /**
     * @generated from protobuf field: uint32 finish_order_id = 6;
     */
    finishOrderId: number;
    /**
     * @generated from protobuf field: int32 retcode = 10;
     */
    retcode: number;
    /**
     * @generated from protobuf field: bool is_new = 8;
     */
    isNew: boolean;
    /**
     * @generated from protobuf field: repeated uint32 affix_list = 1;
     */
    affixList: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class BartenderCompleteOrderRsp$Type extends MessageType<BartenderCompleteOrderRsp> {
    constructor() {
        super("BartenderCompleteOrderRsp", [
            { no: 9, name: "formula_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "finish_order_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "is_new", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "affix_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<BartenderCompleteOrderRsp>): BartenderCompleteOrderRsp {
        const message = { formulaId: 0, questId: 0, finishOrderId: 0, retcode: 0, isNew: false, affixList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BartenderCompleteOrderRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BartenderCompleteOrderRsp): BartenderCompleteOrderRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 formula_id */ 9:
                    message.formulaId = reader.uint32();
                    break;
                case /* uint32 quest_id */ 7:
                    message.questId = reader.uint32();
                    break;
                case /* uint32 finish_order_id */ 6:
                    message.finishOrderId = reader.uint32();
                    break;
                case /* int32 retcode */ 10:
                    message.retcode = reader.int32();
                    break;
                case /* bool is_new */ 8:
                    message.isNew = reader.bool();
                    break;
                case /* repeated uint32 affix_list */ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.affixList.push(reader.uint32());
                    else
                        message.affixList.push(reader.uint32());
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
    internalBinaryWrite(message: BartenderCompleteOrderRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 formula_id = 9; */
        if (message.formulaId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.formulaId);
        /* uint32 quest_id = 7; */
        if (message.questId !== 0)
            writer.tag(7, WireType.Varint).uint32(message.questId);
        /* uint32 finish_order_id = 6; */
        if (message.finishOrderId !== 0)
            writer.tag(6, WireType.Varint).uint32(message.finishOrderId);
        /* int32 retcode = 10; */
        if (message.retcode !== 0)
            writer.tag(10, WireType.Varint).int32(message.retcode);
        /* bool is_new = 8; */
        if (message.isNew !== false)
            writer.tag(8, WireType.Varint).bool(message.isNew);
        /* repeated uint32 affix_list = 1; */
        if (message.affixList.length) {
            writer.tag(1, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.affixList.length; i++)
                writer.uint32(message.affixList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BartenderCompleteOrderRsp
 */
export const BartenderCompleteOrderRsp = new BartenderCompleteOrderRsp$Type();
