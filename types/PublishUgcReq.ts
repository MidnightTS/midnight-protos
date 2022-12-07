// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "PublishUgcReq.proto" (syntax proto3)
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
import { UgcType } from "./UgcType";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 6312;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message PublishUgcReq
 */
export interface PublishUgcReq {
    /**
     * @generated from protobuf field: uint64 ugc_guid = 12;
     */
    ugcGuid: bigint;
    /**
     * @generated from protobuf field: UgcType ugc_type = 10;
     */
    ugcType: UgcType;
}
// @generated message type with reflection information, may provide speed optimized methods
class PublishUgcReq$Type extends MessageType<PublishUgcReq> {
    constructor() {
        super("PublishUgcReq", [
            { no: 12, name: "ugc_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 10, name: "ugc_type", kind: "enum", T: () => ["UgcType", UgcType, "UGC_TYPE_"] }
        ]);
    }
    create(value?: PartialMessage<PublishUgcReq>): PublishUgcReq {
        const message = { ugcGuid: 0n, ugcType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PublishUgcReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PublishUgcReq): PublishUgcReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 ugc_guid */ 12:
                    message.ugcGuid = reader.uint64().toBigInt();
                    break;
                case /* UgcType ugc_type */ 10:
                    message.ugcType = reader.int32();
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
    internalBinaryWrite(message: PublishUgcReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 ugc_guid = 12; */
        if (message.ugcGuid !== 0n)
            writer.tag(12, WireType.Varint).uint64(message.ugcGuid);
        /* UgcType ugc_type = 10; */
        if (message.ugcType !== 0)
            writer.tag(10, WireType.Varint).int32(message.ugcType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PublishUgcReq
 */
export const PublishUgcReq = new PublishUgcReq$Type();
