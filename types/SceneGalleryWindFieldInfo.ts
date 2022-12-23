// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "SceneGalleryWindFieldInfo.proto" (syntax proto3)
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
 * @generated from protobuf message SceneGalleryWindFieldInfo
 */
export interface SceneGalleryWindFieldInfo {
    /**
     * @generated from protobuf field: uint32 Unk3300_MMONPDMIEBN = 6 [json_name = "Unk3300MMONPDMIEBN"];
     */
    unk3300MMONPDMIEBN: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_OJHJPBCAONA = 2 [json_name = "Unk3300OJHJPBCAONA"];
     */
    unk3300OJHJPBCAONA: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_NBIBKFKOCFK = 15 [json_name = "Unk3300NBIBKFKOCFK"];
     */
    unk3300NBIBKFKOCFK: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_EKMHMHJDHIL = 13 [json_name = "Unk3300EKMHMHJDHIL"];
     */
    unk3300EKMHMHJDHIL: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_GNJKOCLJFNM = 7 [json_name = "Unk3300GNJKOCLJFNM"];
     */
    unk3300GNJKOCLJFNM: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_GNKCFHMDOHJ = 3 [json_name = "Unk3300GNKCFHMDOHJ"];
     */
    unk3300GNKCFHMDOHJ: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_FFODAKMKGEK = 4 [json_name = "Unk3300FFODAKMKGEK"];
     */
    unk3300FFODAKMKGEK: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_GLNHBJJJINK = 14 [json_name = "Unk3300GLNHBJJJINK"];
     */
    unk3300GLNHBJJJINK: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryWindFieldInfo$Type extends MessageType<SceneGalleryWindFieldInfo> {
    constructor() {
        super("SceneGalleryWindFieldInfo", [
            { no: 6, name: "Unk3300_MMONPDMIEBN", kind: "scalar", jsonName: "Unk3300MMONPDMIEBN", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_OJHJPBCAONA", kind: "scalar", jsonName: "Unk3300OJHJPBCAONA", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_NBIBKFKOCFK", kind: "scalar", jsonName: "Unk3300NBIBKFKOCFK", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "Unk3300_EKMHMHJDHIL", kind: "scalar", jsonName: "Unk3300EKMHMHJDHIL", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_GNJKOCLJFNM", kind: "scalar", jsonName: "Unk3300GNJKOCLJFNM", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_GNKCFHMDOHJ", kind: "scalar", jsonName: "Unk3300GNKCFHMDOHJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_FFODAKMKGEK", kind: "scalar", jsonName: "Unk3300FFODAKMKGEK", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_GLNHBJJJINK", kind: "scalar", jsonName: "Unk3300GLNHBJJJINK", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<SceneGalleryWindFieldInfo>): SceneGalleryWindFieldInfo {
        const message = { unk3300MMONPDMIEBN: 0, unk3300OJHJPBCAONA: 0, unk3300NBIBKFKOCFK: 0, unk3300EKMHMHJDHIL: 0, unk3300GNJKOCLJFNM: 0, unk3300GNKCFHMDOHJ: 0, unk3300FFODAKMKGEK: 0, unk3300GLNHBJJJINK: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SceneGalleryWindFieldInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneGalleryWindFieldInfo): SceneGalleryWindFieldInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_MMONPDMIEBN = 6 [json_name = "Unk3300MMONPDMIEBN"];*/ 6:
                    message.unk3300MMONPDMIEBN = reader.uint32();
                    break;
                case /* uint32 Unk3300_OJHJPBCAONA = 2 [json_name = "Unk3300OJHJPBCAONA"];*/ 2:
                    message.unk3300OJHJPBCAONA = reader.uint32();
                    break;
                case /* uint32 Unk3300_NBIBKFKOCFK = 15 [json_name = "Unk3300NBIBKFKOCFK"];*/ 15:
                    message.unk3300NBIBKFKOCFK = reader.uint32();
                    break;
                case /* uint32 Unk3300_EKMHMHJDHIL = 13 [json_name = "Unk3300EKMHMHJDHIL"];*/ 13:
                    message.unk3300EKMHMHJDHIL = reader.uint32();
                    break;
                case /* uint32 Unk3300_GNJKOCLJFNM = 7 [json_name = "Unk3300GNJKOCLJFNM"];*/ 7:
                    message.unk3300GNJKOCLJFNM = reader.uint32();
                    break;
                case /* uint32 Unk3300_GNKCFHMDOHJ = 3 [json_name = "Unk3300GNKCFHMDOHJ"];*/ 3:
                    message.unk3300GNKCFHMDOHJ = reader.uint32();
                    break;
                case /* uint32 Unk3300_FFODAKMKGEK = 4 [json_name = "Unk3300FFODAKMKGEK"];*/ 4:
                    message.unk3300FFODAKMKGEK = reader.uint32();
                    break;
                case /* uint32 Unk3300_GLNHBJJJINK = 14 [json_name = "Unk3300GLNHBJJJINK"];*/ 14:
                    message.unk3300GLNHBJJJINK = reader.uint32();
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
    internalBinaryWrite(message: SceneGalleryWindFieldInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_MMONPDMIEBN = 6 [json_name = "Unk3300MMONPDMIEBN"]; */
        if (message.unk3300MMONPDMIEBN !== 0)
            writer.tag(6, WireType.Varint).uint32(message.unk3300MMONPDMIEBN);
        /* uint32 Unk3300_OJHJPBCAONA = 2 [json_name = "Unk3300OJHJPBCAONA"]; */
        if (message.unk3300OJHJPBCAONA !== 0)
            writer.tag(2, WireType.Varint).uint32(message.unk3300OJHJPBCAONA);
        /* uint32 Unk3300_NBIBKFKOCFK = 15 [json_name = "Unk3300NBIBKFKOCFK"]; */
        if (message.unk3300NBIBKFKOCFK !== 0)
            writer.tag(15, WireType.Varint).uint32(message.unk3300NBIBKFKOCFK);
        /* uint32 Unk3300_EKMHMHJDHIL = 13 [json_name = "Unk3300EKMHMHJDHIL"]; */
        if (message.unk3300EKMHMHJDHIL !== 0)
            writer.tag(13, WireType.Varint).uint32(message.unk3300EKMHMHJDHIL);
        /* uint32 Unk3300_GNJKOCLJFNM = 7 [json_name = "Unk3300GNJKOCLJFNM"]; */
        if (message.unk3300GNJKOCLJFNM !== 0)
            writer.tag(7, WireType.Varint).uint32(message.unk3300GNJKOCLJFNM);
        /* uint32 Unk3300_GNKCFHMDOHJ = 3 [json_name = "Unk3300GNKCFHMDOHJ"]; */
        if (message.unk3300GNKCFHMDOHJ !== 0)
            writer.tag(3, WireType.Varint).uint32(message.unk3300GNKCFHMDOHJ);
        /* uint32 Unk3300_FFODAKMKGEK = 4 [json_name = "Unk3300FFODAKMKGEK"]; */
        if (message.unk3300FFODAKMKGEK !== 0)
            writer.tag(4, WireType.Varint).uint32(message.unk3300FFODAKMKGEK);
        /* uint32 Unk3300_GLNHBJJJINK = 14 [json_name = "Unk3300GLNHBJJJINK"]; */
        if (message.unk3300GLNHBJJJINK !== 0)
            writer.tag(14, WireType.Varint).uint32(message.unk3300GLNHBJJJINK);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryWindFieldInfo
 */
export const SceneGalleryWindFieldInfo = new SceneGalleryWindFieldInfo$Type();
