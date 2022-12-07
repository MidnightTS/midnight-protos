// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "HomeResource.proto" (syntax proto3)
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
 * @generated from protobuf message HomeResource
 */
export interface HomeResource {
    /**
     * @generated from protobuf field: uint32 Unk3300_LJCAIDECBND = 6 [json_name = "Unk3300LJCAIDECBND"];
     */
    unk3300LJCAIDECBND: number;
    /**
     * @generated from protobuf field: fixed32 next_refresh_time = 13;
     */
    nextRefreshTime: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_LINAPIIPNOB = 1 [json_name = "Unk3300LINAPIIPNOB"];
     */
    unk3300LINAPIIPNOB: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class HomeResource$Type extends MessageType<HomeResource> {
    constructor() {
        super("HomeResource", [
            { no: 6, name: "Unk3300_LJCAIDECBND", kind: "scalar", jsonName: "Unk3300LJCAIDECBND", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "next_refresh_time", kind: "scalar", T: 7 /*ScalarType.FIXED32*/ },
            { no: 1, name: "Unk3300_LINAPIIPNOB", kind: "scalar", jsonName: "Unk3300LINAPIIPNOB", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<HomeResource>): HomeResource {
        const message = { unk3300LJCAIDECBND: 0, nextRefreshTime: 0, unk3300LINAPIIPNOB: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<HomeResource>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HomeResource): HomeResource {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_LJCAIDECBND = 6 [json_name = "Unk3300LJCAIDECBND"];*/ 6:
                    message.unk3300LJCAIDECBND = reader.uint32();
                    break;
                case /* fixed32 next_refresh_time */ 13:
                    message.nextRefreshTime = reader.fixed32();
                    break;
                case /* uint32 Unk3300_LINAPIIPNOB = 1 [json_name = "Unk3300LINAPIIPNOB"];*/ 1:
                    message.unk3300LINAPIIPNOB = reader.uint32();
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
    internalBinaryWrite(message: HomeResource, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_LJCAIDECBND = 6 [json_name = "Unk3300LJCAIDECBND"]; */
        if (message.unk3300LJCAIDECBND !== 0)
            writer.tag(6, WireType.Varint).uint32(message.unk3300LJCAIDECBND);
        /* fixed32 next_refresh_time = 13; */
        if (message.nextRefreshTime !== 0)
            writer.tag(13, WireType.Bit32).fixed32(message.nextRefreshTime);
        /* uint32 Unk3300_LINAPIIPNOB = 1 [json_name = "Unk3300LINAPIIPNOB"]; */
        if (message.unk3300LINAPIIPNOB !== 0)
            writer.tag(1, WireType.Varint).uint32(message.unk3300LINAPIIPNOB);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeResource
 */
export const HomeResource = new HomeResource$Type();
