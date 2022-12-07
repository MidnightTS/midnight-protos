// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GCGDSDataNotify.proto" (syntax proto3)
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
import { GCGDSCardData } from "./GCGDSCardData";
import { GCGDSDeckData } from "./GCGDSDeckData";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 7850;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message GCGDSDataNotify
 */
export interface GCGDSDataNotify {
    /**
     * @generated from protobuf field: uint32 cur_deck_id = 8;
     */
    curDeckId: number;
    /**
     * @generated from protobuf field: repeated GCGDSDeckData deck_list = 3;
     */
    deckList: GCGDSDeckData[];
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_GEBHJAGKEID = 10 [json_name = "Unk3300GEBHJAGKEID"];
     */
    unk3300GEBHJAGKEID: number[];
    /**
     * @generated from protobuf field: repeated GCGDSCardData card_list = 9;
     */
    cardList: GCGDSCardData[];
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_AAEAECGPHBH = 5 [json_name = "Unk3300AAEAECGPHBH"];
     */
    unk3300AAEAECGPHBH: number[];
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_JJCEINFHKOG = 6 [json_name = "Unk3300JJCEINFHKOG"];
     */
    unk3300JJCEINFHKOG: number[];
}
// @generated message type with reflection information, may provide speed optimized methods
class GCGDSDataNotify$Type extends MessageType<GCGDSDataNotify> {
    constructor() {
        super("GCGDSDataNotify", [
            { no: 8, name: "cur_deck_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "deck_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGDSDeckData },
            { no: 10, name: "Unk3300_GEBHJAGKEID", kind: "scalar", jsonName: "Unk3300GEBHJAGKEID", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGDSCardData },
            { no: 5, name: "Unk3300_AAEAECGPHBH", kind: "scalar", jsonName: "Unk3300AAEAECGPHBH", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_JJCEINFHKOG", kind: "scalar", jsonName: "Unk3300JJCEINFHKOG", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GCGDSDataNotify>): GCGDSDataNotify {
        const message = { curDeckId: 0, deckList: [], unk3300GEBHJAGKEID: [], cardList: [], unk3300AAEAECGPHBH: [], unk3300JJCEINFHKOG: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GCGDSDataNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GCGDSDataNotify): GCGDSDataNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 cur_deck_id */ 8:
                    message.curDeckId = reader.uint32();
                    break;
                case /* repeated GCGDSDeckData deck_list */ 3:
                    message.deckList.push(GCGDSDeckData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 Unk3300_GEBHJAGKEID = 10 [json_name = "Unk3300GEBHJAGKEID"];*/ 10:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300GEBHJAGKEID.push(reader.uint32());
                    else
                        message.unk3300GEBHJAGKEID.push(reader.uint32());
                    break;
                case /* repeated GCGDSCardData card_list */ 9:
                    message.cardList.push(GCGDSCardData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 Unk3300_AAEAECGPHBH = 5 [json_name = "Unk3300AAEAECGPHBH"];*/ 5:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300AAEAECGPHBH.push(reader.uint32());
                    else
                        message.unk3300AAEAECGPHBH.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_JJCEINFHKOG = 6 [json_name = "Unk3300JJCEINFHKOG"];*/ 6:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300JJCEINFHKOG.push(reader.uint32());
                    else
                        message.unk3300JJCEINFHKOG.push(reader.uint32());
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
    internalBinaryWrite(message: GCGDSDataNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 cur_deck_id = 8; */
        if (message.curDeckId !== 0)
            writer.tag(8, WireType.Varint).uint32(message.curDeckId);
        /* repeated GCGDSDeckData deck_list = 3; */
        for (let i = 0; i < message.deckList.length; i++)
            GCGDSDeckData.internalBinaryWrite(message.deckList[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 Unk3300_GEBHJAGKEID = 10 [json_name = "Unk3300GEBHJAGKEID"]; */
        if (message.unk3300GEBHJAGKEID.length) {
            writer.tag(10, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300GEBHJAGKEID.length; i++)
                writer.uint32(message.unk3300GEBHJAGKEID[i]);
            writer.join();
        }
        /* repeated GCGDSCardData card_list = 9; */
        for (let i = 0; i < message.cardList.length; i++)
            GCGDSCardData.internalBinaryWrite(message.cardList[i], writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 Unk3300_AAEAECGPHBH = 5 [json_name = "Unk3300AAEAECGPHBH"]; */
        if (message.unk3300AAEAECGPHBH.length) {
            writer.tag(5, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300AAEAECGPHBH.length; i++)
                writer.uint32(message.unk3300AAEAECGPHBH[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_JJCEINFHKOG = 6 [json_name = "Unk3300JJCEINFHKOG"]; */
        if (message.unk3300JJCEINFHKOG.length) {
            writer.tag(6, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300JJCEINFHKOG.length; i++)
                writer.uint32(message.unk3300JJCEINFHKOG[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGDSDataNotify
 */
export const GCGDSDataNotify = new GCGDSDataNotify$Type();