// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "RefreshBackgroundAvatarRsp.proto" (syntax proto3)
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
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 1744;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message RefreshBackgroundAvatarRsp
 */
export interface RefreshBackgroundAvatarRsp {
    /**
     * @generated from protobuf field: map<uint64, uint32> hp_full_time_map = 4;
     */
    hpFullTimeMap: {
        [key: string]: number;
    };
    /**
     * @generated from protobuf field: int32 retcode = 11;
     */
    retcode: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class RefreshBackgroundAvatarRsp$Type extends MessageType<RefreshBackgroundAvatarRsp> {
    constructor() {
        super("RefreshBackgroundAvatarRsp", [
            { no: 4, name: "hp_full_time_map", kind: "map", K: 4 /*ScalarType.UINT64*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 11, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<RefreshBackgroundAvatarRsp>): RefreshBackgroundAvatarRsp {
        const message = { hpFullTimeMap: {}, retcode: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RefreshBackgroundAvatarRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RefreshBackgroundAvatarRsp): RefreshBackgroundAvatarRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint64, uint32> hp_full_time_map */ 4:
                    this.binaryReadMap4(message.hpFullTimeMap, reader, options);
                    break;
                case /* int32 retcode */ 11:
                    message.retcode = reader.int32();
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
    private binaryReadMap4(map: RefreshBackgroundAvatarRsp["hpFullTimeMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof RefreshBackgroundAvatarRsp["hpFullTimeMap"] | undefined, val: RefreshBackgroundAvatarRsp["hpFullTimeMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint64().toString();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field RefreshBackgroundAvatarRsp.hp_full_time_map");
            }
        }
        map[key ?? "0"] = val ?? 0;
    }
    internalBinaryWrite(message: RefreshBackgroundAvatarRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<uint64, uint32> hp_full_time_map = 4; */
        for (let k of Object.keys(message.hpFullTimeMap))
            writer.tag(4, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint64(k).tag(2, WireType.Varint).uint32(message.hpFullTimeMap[k]).join();
        /* int32 retcode = 11; */
        if (message.retcode !== 0)
            writer.tag(11, WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RefreshBackgroundAvatarRsp
 */
export const RefreshBackgroundAvatarRsp = new RefreshBackgroundAvatarRsp$Type();
