// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "SceneGalleryEffigyChallengeV2Info.proto" (syntax proto3)
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
 * @generated from protobuf message SceneGalleryEffigyChallengeV2Info
 */
export interface SceneGalleryEffigyChallengeV2Info {
    /**
     * @generated from protobuf field: uint32 Unk3300_MICPCKIOEJA = 1 [json_name = "Unk3300MICPCKIOEJA"];
     */
    unk3300MICPCKIOEJA: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_BMPCKGJAGPE = 8 [json_name = "Unk3300BMPCKGJAGPE"];
     */
    unk3300BMPCKGJAGPE: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_EOGAPBOFHOP = 2 [json_name = "Unk3300EOGAPBOFHOP"];
     */
    unk3300EOGAPBOFHOP: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_MBHBNIPEPNJ = 7 [json_name = "Unk3300MBHBNIPEPNJ"];
     */
    unk3300MBHBNIPEPNJ: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_AIEEGIBMOFH = 11 [json_name = "Unk3300AIEEGIBMOFH"];
     */
    unk3300AIEEGIBMOFH: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryEffigyChallengeV2Info$Type extends MessageType<SceneGalleryEffigyChallengeV2Info> {
    constructor() {
        super("SceneGalleryEffigyChallengeV2Info", [
            { no: 1, name: "Unk3300_MICPCKIOEJA", kind: "scalar", jsonName: "Unk3300MICPCKIOEJA", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_BMPCKGJAGPE", kind: "scalar", jsonName: "Unk3300BMPCKGJAGPE", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_EOGAPBOFHOP", kind: "scalar", jsonName: "Unk3300EOGAPBOFHOP", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "Unk3300_MBHBNIPEPNJ", kind: "scalar", jsonName: "Unk3300MBHBNIPEPNJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_AIEEGIBMOFH", kind: "scalar", jsonName: "Unk3300AIEEGIBMOFH", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<SceneGalleryEffigyChallengeV2Info>): SceneGalleryEffigyChallengeV2Info {
        const message = { unk3300MICPCKIOEJA: 0, unk3300BMPCKGJAGPE: 0, unk3300EOGAPBOFHOP: 0, unk3300MBHBNIPEPNJ: 0, unk3300AIEEGIBMOFH: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SceneGalleryEffigyChallengeV2Info>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneGalleryEffigyChallengeV2Info): SceneGalleryEffigyChallengeV2Info {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_MICPCKIOEJA = 1 [json_name = "Unk3300MICPCKIOEJA"];*/ 1:
                    message.unk3300MICPCKIOEJA = reader.uint32();
                    break;
                case /* uint32 Unk3300_BMPCKGJAGPE = 8 [json_name = "Unk3300BMPCKGJAGPE"];*/ 8:
                    message.unk3300BMPCKGJAGPE = reader.uint32();
                    break;
                case /* uint32 Unk3300_EOGAPBOFHOP = 2 [json_name = "Unk3300EOGAPBOFHOP"];*/ 2:
                    message.unk3300EOGAPBOFHOP = reader.uint32();
                    break;
                case /* uint32 Unk3300_MBHBNIPEPNJ = 7 [json_name = "Unk3300MBHBNIPEPNJ"];*/ 7:
                    message.unk3300MBHBNIPEPNJ = reader.uint32();
                    break;
                case /* uint32 Unk3300_AIEEGIBMOFH = 11 [json_name = "Unk3300AIEEGIBMOFH"];*/ 11:
                    message.unk3300AIEEGIBMOFH = reader.uint32();
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
    internalBinaryWrite(message: SceneGalleryEffigyChallengeV2Info, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_MICPCKIOEJA = 1 [json_name = "Unk3300MICPCKIOEJA"]; */
        if (message.unk3300MICPCKIOEJA !== 0)
            writer.tag(1, WireType.Varint).uint32(message.unk3300MICPCKIOEJA);
        /* uint32 Unk3300_BMPCKGJAGPE = 8 [json_name = "Unk3300BMPCKGJAGPE"]; */
        if (message.unk3300BMPCKGJAGPE !== 0)
            writer.tag(8, WireType.Varint).uint32(message.unk3300BMPCKGJAGPE);
        /* uint32 Unk3300_EOGAPBOFHOP = 2 [json_name = "Unk3300EOGAPBOFHOP"]; */
        if (message.unk3300EOGAPBOFHOP !== 0)
            writer.tag(2, WireType.Varint).uint32(message.unk3300EOGAPBOFHOP);
        /* uint32 Unk3300_MBHBNIPEPNJ = 7 [json_name = "Unk3300MBHBNIPEPNJ"]; */
        if (message.unk3300MBHBNIPEPNJ !== 0)
            writer.tag(7, WireType.Varint).uint32(message.unk3300MBHBNIPEPNJ);
        /* uint32 Unk3300_AIEEGIBMOFH = 11 [json_name = "Unk3300AIEEGIBMOFH"]; */
        if (message.unk3300AIEEGIBMOFH !== 0)
            writer.tag(11, WireType.Varint).uint32(message.unk3300AIEEGIBMOFH);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryEffigyChallengeV2Info
 */
export const SceneGalleryEffigyChallengeV2Info = new SceneGalleryEffigyChallengeV2Info$Type();
