// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "ActivityAcceptGiftResultInfo.proto" (syntax proto3)
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
/**
 * @generated from protobuf message ActivityAcceptGiftResultInfo
 */
export interface ActivityAcceptGiftResultInfo {
    /**
     * @generated from protobuf field: map<uint32, uint32> Unk3300_JFHLEBLOFMA = 1 [json_name = "Unk3300JFHLEBLOFMA"];
     */
    unk3300JFHLEBLOFMA: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: map<uint32, uint32> Unk3300_COCFNBJCFGP = 9 [json_name = "Unk3300COCFNBJCFGP"];
     */
    unk3300COCFNBJCFGP: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: uint32 uid = 12;
     */
    uid: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ActivityAcceptGiftResultInfo$Type extends MessageType<ActivityAcceptGiftResultInfo> {
    constructor() {
        super("ActivityAcceptGiftResultInfo", [
            { no: 1, name: "Unk3300_JFHLEBLOFMA", kind: "map", jsonName: "Unk3300JFHLEBLOFMA", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 9, name: "Unk3300_COCFNBJCFGP", kind: "map", jsonName: "Unk3300COCFNBJCFGP", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 12, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ActivityAcceptGiftResultInfo>): ActivityAcceptGiftResultInfo {
        const message = { unk3300JFHLEBLOFMA: {}, unk3300COCFNBJCFGP: {}, uid: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ActivityAcceptGiftResultInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ActivityAcceptGiftResultInfo): ActivityAcceptGiftResultInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> Unk3300_JFHLEBLOFMA = 1 [json_name = "Unk3300JFHLEBLOFMA"];*/ 1:
                    this.binaryReadMap1(message.unk3300JFHLEBLOFMA, reader, options);
                    break;
                case /* map<uint32, uint32> Unk3300_COCFNBJCFGP = 9 [json_name = "Unk3300COCFNBJCFGP"];*/ 9:
                    this.binaryReadMap9(message.unk3300COCFNBJCFGP, reader, options);
                    break;
                case /* uint32 uid */ 12:
                    message.uid = reader.uint32();
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
    private binaryReadMap1(map: ActivityAcceptGiftResultInfo["unk3300JFHLEBLOFMA"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof ActivityAcceptGiftResultInfo["unk3300JFHLEBLOFMA"] | undefined, val: ActivityAcceptGiftResultInfo["unk3300JFHLEBLOFMA"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field ActivityAcceptGiftResultInfo.Unk3300_JFHLEBLOFMA");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    private binaryReadMap9(map: ActivityAcceptGiftResultInfo["unk3300COCFNBJCFGP"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof ActivityAcceptGiftResultInfo["unk3300COCFNBJCFGP"] | undefined, val: ActivityAcceptGiftResultInfo["unk3300COCFNBJCFGP"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field ActivityAcceptGiftResultInfo.Unk3300_COCFNBJCFGP");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: ActivityAcceptGiftResultInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<uint32, uint32> Unk3300_JFHLEBLOFMA = 1 [json_name = "Unk3300JFHLEBLOFMA"]; */
        for (let k of Object.keys(message.unk3300JFHLEBLOFMA))
            writer.tag(1, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.unk3300JFHLEBLOFMA[k as any]).join();
        /* map<uint32, uint32> Unk3300_COCFNBJCFGP = 9 [json_name = "Unk3300COCFNBJCFGP"]; */
        for (let k of Object.keys(message.unk3300COCFNBJCFGP))
            writer.tag(9, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.unk3300COCFNBJCFGP[k as any]).join();
        /* uint32 uid = 12; */
        if (message.uid !== 0)
            writer.tag(12, WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ActivityAcceptGiftResultInfo
 */
export const ActivityAcceptGiftResultInfo = new ActivityAcceptGiftResultInfo$Type();