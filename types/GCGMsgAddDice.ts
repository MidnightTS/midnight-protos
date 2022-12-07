// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GCGMsgAddDice.proto" (syntax proto3)
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
import { GCGReason } from "./GCGReason";
import { GCGDiceSideType } from "./GCGDiceSideType";
/**
 * @generated from protobuf message GCGMsgAddDice
 */
export interface GCGMsgAddDice {
    /**
     * @generated from protobuf field: map<uint32, GCGDiceSideType> Unk3300_KFKOGOKPIFN = 13 [json_name = "Unk3300KFKOGOKPIFN"];
     */
    unk3300KFKOGOKPIFN: {
        [key: number]: GCGDiceSideType;
    };
    /**
     * @generated from protobuf field: GCGReason reason = 10;
     */
    reason: GCGReason;
    /**
     * @generated from protobuf field: int32 change_count = 6;
     */
    changeCount: number;
    /**
     * @generated from protobuf field: map<uint32, GCGDiceSideType> Unk3300_PCMPCCLFEIM = 11 [json_name = "Unk3300PCMPCCLFEIM"];
     */
    unk3300PCMPCCLFEIM: {
        [key: number]: GCGDiceSideType;
    };
    /**
     * @generated from protobuf field: uint32 controller_id = 5;
     */
    controllerId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgAddDice$Type extends MessageType<GCGMsgAddDice> {
    constructor() {
        super("GCGMsgAddDice", [
            { no: 13, name: "Unk3300_KFKOGOKPIFN", kind: "map", jsonName: "Unk3300KFKOGOKPIFN", K: 13 /*ScalarType.UINT32*/, V: { kind: "enum", T: () => ["GCGDiceSideType", GCGDiceSideType] } },
            { no: 10, name: "reason", kind: "enum", T: () => ["GCGReason", GCGReason] },
            { no: 6, name: "change_count", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "Unk3300_PCMPCCLFEIM", kind: "map", jsonName: "Unk3300PCMPCCLFEIM", K: 13 /*ScalarType.UINT32*/, V: { kind: "enum", T: () => ["GCGDiceSideType", GCGDiceSideType] } },
            { no: 5, name: "controller_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GCGMsgAddDice>): GCGMsgAddDice {
        const message = { unk3300KFKOGOKPIFN: {}, reason: 0, changeCount: 0, unk3300PCMPCCLFEIM: {}, controllerId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GCGMsgAddDice>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GCGMsgAddDice): GCGMsgAddDice {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, GCGDiceSideType> Unk3300_KFKOGOKPIFN = 13 [json_name = "Unk3300KFKOGOKPIFN"];*/ 13:
                    this.binaryReadMap13(message.unk3300KFKOGOKPIFN, reader, options);
                    break;
                case /* GCGReason reason */ 10:
                    message.reason = reader.int32();
                    break;
                case /* int32 change_count */ 6:
                    message.changeCount = reader.int32();
                    break;
                case /* map<uint32, GCGDiceSideType> Unk3300_PCMPCCLFEIM = 11 [json_name = "Unk3300PCMPCCLFEIM"];*/ 11:
                    this.binaryReadMap11(message.unk3300PCMPCCLFEIM, reader, options);
                    break;
                case /* uint32 controller_id */ 5:
                    message.controllerId = reader.uint32();
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
    private binaryReadMap13(map: GCGMsgAddDice["unk3300KFKOGOKPIFN"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof GCGMsgAddDice["unk3300KFKOGOKPIFN"] | undefined, val: GCGMsgAddDice["unk3300KFKOGOKPIFN"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.int32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field GCGMsgAddDice.Unk3300_KFKOGOKPIFN");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    private binaryReadMap11(map: GCGMsgAddDice["unk3300PCMPCCLFEIM"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof GCGMsgAddDice["unk3300PCMPCCLFEIM"] | undefined, val: GCGMsgAddDice["unk3300PCMPCCLFEIM"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.int32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field GCGMsgAddDice.Unk3300_PCMPCCLFEIM");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: GCGMsgAddDice, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<uint32, GCGDiceSideType> Unk3300_KFKOGOKPIFN = 13 [json_name = "Unk3300KFKOGOKPIFN"]; */
        for (let k of Object.keys(message.unk3300KFKOGOKPIFN))
            writer.tag(13, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).int32(message.unk3300KFKOGOKPIFN[k as any]).join();
        /* GCGReason reason = 10; */
        if (message.reason !== 0)
            writer.tag(10, WireType.Varint).int32(message.reason);
        /* int32 change_count = 6; */
        if (message.changeCount !== 0)
            writer.tag(6, WireType.Varint).int32(message.changeCount);
        /* map<uint32, GCGDiceSideType> Unk3300_PCMPCCLFEIM = 11 [json_name = "Unk3300PCMPCCLFEIM"]; */
        for (let k of Object.keys(message.unk3300PCMPCCLFEIM))
            writer.tag(11, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).int32(message.unk3300PCMPCCLFEIM[k as any]).join();
        /* uint32 controller_id = 5; */
        if (message.controllerId !== 0)
            writer.tag(5, WireType.Varint).uint32(message.controllerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGMsgAddDice
 */
export const GCGMsgAddDice = new GCGMsgAddDice$Type();
