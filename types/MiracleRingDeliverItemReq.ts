// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "MiracleRingDeliverItemReq.proto" (syntax proto3)
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
import { InterOpType } from "./InterOpType";
import { ItemParam } from "./ItemParam";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 5244;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message MiracleRingDeliverItemReq
 */
export interface MiracleRingDeliverItemReq {
    /**
     * @generated from protobuf field: repeated ItemParam item_param_list = 3;
     */
    itemParamList: ItemParam[];
    /**
     * @generated from protobuf field: uint32 gadget_entity_id = 6;
     */
    gadgetEntityId: number;
    /**
     * @generated from protobuf field: uint32 gadget_id = 8;
     */
    gadgetId: number;
    /**
     * @generated from protobuf field: repeated uint64 food_weapon_guid_list = 13;
     */
    foodWeaponGuidList: bigint[];
    /**
     * @generated from protobuf field: InterOpType op_type = 15;
     */
    opType: InterOpType;
}
// @generated message type with reflection information, may provide speed optimized methods
class MiracleRingDeliverItemReq$Type extends MessageType<MiracleRingDeliverItemReq> {
    constructor() {
        super("MiracleRingDeliverItemReq", [
            { no: 3, name: "item_param_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam },
            { no: 6, name: "gadget_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "gadget_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "food_weapon_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 15, name: "op_type", kind: "enum", T: () => ["InterOpType", InterOpType, "INTER_OP_TYPE_"] }
        ]);
    }
    create(value?: PartialMessage<MiracleRingDeliverItemReq>): MiracleRingDeliverItemReq {
        const message = { itemParamList: [], gadgetEntityId: 0, gadgetId: 0, foodWeaponGuidList: [], opType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MiracleRingDeliverItemReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MiracleRingDeliverItemReq): MiracleRingDeliverItemReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated ItemParam item_param_list */ 3:
                    message.itemParamList.push(ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 gadget_entity_id */ 6:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* uint32 gadget_id */ 8:
                    message.gadgetId = reader.uint32();
                    break;
                case /* repeated uint64 food_weapon_guid_list */ 13:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.foodWeaponGuidList.push(reader.uint64().toBigInt());
                    else
                        message.foodWeaponGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* InterOpType op_type */ 15:
                    message.opType = reader.int32();
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
    internalBinaryWrite(message: MiracleRingDeliverItemReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated ItemParam item_param_list = 3; */
        for (let i = 0; i < message.itemParamList.length; i++)
            ItemParam.internalBinaryWrite(message.itemParamList[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* uint32 gadget_entity_id = 6; */
        if (message.gadgetEntityId !== 0)
            writer.tag(6, WireType.Varint).uint32(message.gadgetEntityId);
        /* uint32 gadget_id = 8; */
        if (message.gadgetId !== 0)
            writer.tag(8, WireType.Varint).uint32(message.gadgetId);
        /* repeated uint64 food_weapon_guid_list = 13; */
        if (message.foodWeaponGuidList.length) {
            writer.tag(13, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.foodWeaponGuidList.length; i++)
                writer.uint64(message.foodWeaponGuidList[i]);
            writer.join();
        }
        /* InterOpType op_type = 15; */
        if (message.opType !== 0)
            writer.tag(15, WireType.Varint).int32(message.opType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MiracleRingDeliverItemReq
 */
export const MiracleRingDeliverItemReq = new MiracleRingDeliverItemReq$Type();
