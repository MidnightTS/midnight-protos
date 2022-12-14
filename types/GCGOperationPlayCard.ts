// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GCGOperationPlayCard.proto" (syntax proto3)
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
 * @generated from protobuf message GCGOperationPlayCard
 */
export interface GCGOperationPlayCard {
    /**
     * @generated from protobuf field: uint32 replace_card_guid = 8;
     */
    replaceCardGuid: number;
    /**
     * @generated from protobuf field: repeated uint32 target_card_guid_list = 14;
     */
    targetCardGuidList: number[];
    /**
     * @generated from protobuf field: uint32 card_guid = 1;
     */
    cardGuid: number;
    /**
     * @generated from protobuf field: repeated uint32 cost_dice_index_list = 11;
     */
    costDiceIndexList: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class GCGOperationPlayCard$Type extends MessageType<GCGOperationPlayCard> {
    constructor() {
        super("GCGOperationPlayCard", [
            { no: 8, name: "replace_card_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "target_card_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "card_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "cost_dice_index_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GCGOperationPlayCard>): GCGOperationPlayCard {
        const message = { replaceCardGuid: 0, targetCardGuidList: [], cardGuid: 0, costDiceIndexList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GCGOperationPlayCard>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GCGOperationPlayCard): GCGOperationPlayCard {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 replace_card_guid */ 8:
                    message.replaceCardGuid = reader.uint32();
                    break;
                case /* repeated uint32 target_card_guid_list */ 14:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.targetCardGuidList.push(reader.uint32());
                    else
                        message.targetCardGuidList.push(reader.uint32());
                    break;
                case /* uint32 card_guid */ 1:
                    message.cardGuid = reader.uint32();
                    break;
                case /* repeated uint32 cost_dice_index_list */ 11:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.costDiceIndexList.push(reader.uint32());
                    else
                        message.costDiceIndexList.push(reader.uint32());
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
    internalBinaryWrite(message: GCGOperationPlayCard, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 replace_card_guid = 8; */
        if (message.replaceCardGuid !== 0)
            writer.tag(8, WireType.Varint).uint32(message.replaceCardGuid);
        /* repeated uint32 target_card_guid_list = 14; */
        if (message.targetCardGuidList.length) {
            writer.tag(14, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.targetCardGuidList.length; i++)
                writer.uint32(message.targetCardGuidList[i]);
            writer.join();
        }
        /* uint32 card_guid = 1; */
        if (message.cardGuid !== 0)
            writer.tag(1, WireType.Varint).uint32(message.cardGuid);
        /* repeated uint32 cost_dice_index_list = 11; */
        if (message.costDiceIndexList.length) {
            writer.tag(11, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.costDiceIndexList.length; i++)
                writer.uint32(message.costDiceIndexList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGOperationPlayCard
 */
export const GCGOperationPlayCard = new GCGOperationPlayCard$Type();
