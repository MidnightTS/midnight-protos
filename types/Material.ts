// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "Material.proto" (syntax proto3)
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
import { MaterialDeleteInfo } from "./MaterialDeleteInfo";
/**
 * @generated from protobuf message Material
 */
export interface Material {
    /**
     * @generated from protobuf field: uint32 count = 1;
     */
    count: number;
    /**
     * @generated from protobuf field: MaterialDeleteInfo delete_info = 2;
     */
    deleteInfo?: MaterialDeleteInfo;
}
// @generated message type with reflection information, may provide speed optimized methods
class Material$Type extends MessageType<Material> {
    constructor() {
        super("Material", [
            { no: 1, name: "count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "delete_info", kind: "message", T: () => MaterialDeleteInfo }
        ]);
    }
    create(value?: PartialMessage<Material>): Material {
        const message = { count: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Material>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Material): Material {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 count */ 1:
                    message.count = reader.uint32();
                    break;
                case /* MaterialDeleteInfo delete_info */ 2:
                    message.deleteInfo = MaterialDeleteInfo.internalBinaryRead(reader, reader.uint32(), options, message.deleteInfo);
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
    internalBinaryWrite(message: Material, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 count = 1; */
        if (message.count !== 0)
            writer.tag(1, WireType.Varint).uint32(message.count);
        /* MaterialDeleteInfo delete_info = 2; */
        if (message.deleteInfo)
            MaterialDeleteInfo.internalBinaryWrite(message.deleteInfo, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Material
 */
export const Material = new Material$Type();
