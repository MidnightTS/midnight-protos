// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ItemAddHintNotify.proto" (syntax proto3)
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
import { Vector } from "./Vector";
import { ItemHint } from "./ItemHint";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 700;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message ItemAddHintNotify
 */
export interface ItemAddHintNotify {
    /**
     * @generated from protobuf field: bool Unk3300_FLIKEBJINCL = 5 [json_name = "Unk3300FLIKEBJINCL"];
     */
    unk3300FLIKEBJINCL: boolean;
    /**
     * @generated from protobuf field: bool Unk3300_NIJLGEHNBNC = 4 [json_name = "Unk3300NIJLGEHNBNC"];
     */
    unk3300NIJLGEHNBNC: boolean;
    /**
     * @generated from protobuf field: repeated ItemHint item_list = 11;
     */
    itemList: ItemHint[];
    /**
     * @generated from protobuf field: repeated ItemHint overflow_transformed_item_list = 1;
     */
    overflowTransformedItemList: ItemHint[];
    /**
     * @generated from protobuf field: bool Unk3300_KIOMJNHFMDE = 6 [json_name = "Unk3300KIOMJNHFMDE"];
     */
    unk3300KIOMJNHFMDE: boolean;
    /**
     * @generated from protobuf field: uint32 reason = 14;
     */
    reason: number;
    /**
     * @generated from protobuf field: Vector position = 12;
     */
    position?: Vector;
    /**
     * @generated from protobuf field: uint32 quest_id = 3;
     */
    questId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ItemAddHintNotify$Type extends MessageType<ItemAddHintNotify> {
    constructor() {
        super("ItemAddHintNotify", [
            { no: 5, name: "Unk3300_FLIKEBJINCL", kind: "scalar", jsonName: "Unk3300FLIKEBJINCL", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "Unk3300_NIJLGEHNBNC", kind: "scalar", jsonName: "Unk3300NIJLGEHNBNC", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemHint },
            { no: 1, name: "overflow_transformed_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemHint },
            { no: 6, name: "Unk3300_KIOMJNHFMDE", kind: "scalar", jsonName: "Unk3300KIOMJNHFMDE", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "reason", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "position", kind: "message", T: () => Vector },
            { no: 3, name: "quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ItemAddHintNotify>): ItemAddHintNotify {
        const message = { unk3300FLIKEBJINCL: false, unk3300NIJLGEHNBNC: false, itemList: [], overflowTransformedItemList: [], unk3300KIOMJNHFMDE: false, reason: 0, questId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ItemAddHintNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ItemAddHintNotify): ItemAddHintNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool Unk3300_FLIKEBJINCL = 5 [json_name = "Unk3300FLIKEBJINCL"];*/ 5:
                    message.unk3300FLIKEBJINCL = reader.bool();
                    break;
                case /* bool Unk3300_NIJLGEHNBNC = 4 [json_name = "Unk3300NIJLGEHNBNC"];*/ 4:
                    message.unk3300NIJLGEHNBNC = reader.bool();
                    break;
                case /* repeated ItemHint item_list */ 11:
                    message.itemList.push(ItemHint.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ItemHint overflow_transformed_item_list */ 1:
                    message.overflowTransformedItemList.push(ItemHint.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool Unk3300_KIOMJNHFMDE = 6 [json_name = "Unk3300KIOMJNHFMDE"];*/ 6:
                    message.unk3300KIOMJNHFMDE = reader.bool();
                    break;
                case /* uint32 reason */ 14:
                    message.reason = reader.uint32();
                    break;
                case /* Vector position */ 12:
                    message.position = Vector.internalBinaryRead(reader, reader.uint32(), options, message.position);
                    break;
                case /* uint32 quest_id */ 3:
                    message.questId = reader.uint32();
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
    internalBinaryWrite(message: ItemAddHintNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool Unk3300_FLIKEBJINCL = 5 [json_name = "Unk3300FLIKEBJINCL"]; */
        if (message.unk3300FLIKEBJINCL !== false)
            writer.tag(5, WireType.Varint).bool(message.unk3300FLIKEBJINCL);
        /* bool Unk3300_NIJLGEHNBNC = 4 [json_name = "Unk3300NIJLGEHNBNC"]; */
        if (message.unk3300NIJLGEHNBNC !== false)
            writer.tag(4, WireType.Varint).bool(message.unk3300NIJLGEHNBNC);
        /* repeated ItemHint item_list = 11; */
        for (let i = 0; i < message.itemList.length; i++)
            ItemHint.internalBinaryWrite(message.itemList[i], writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* repeated ItemHint overflow_transformed_item_list = 1; */
        for (let i = 0; i < message.overflowTransformedItemList.length; i++)
            ItemHint.internalBinaryWrite(message.overflowTransformedItemList[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_KIOMJNHFMDE = 6 [json_name = "Unk3300KIOMJNHFMDE"]; */
        if (message.unk3300KIOMJNHFMDE !== false)
            writer.tag(6, WireType.Varint).bool(message.unk3300KIOMJNHFMDE);
        /* uint32 reason = 14; */
        if (message.reason !== 0)
            writer.tag(14, WireType.Varint).uint32(message.reason);
        /* Vector position = 12; */
        if (message.position)
            Vector.internalBinaryWrite(message.position, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* uint32 quest_id = 3; */
        if (message.questId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.questId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ItemAddHintNotify
 */
export const ItemAddHintNotify = new ItemAddHintNotify$Type();