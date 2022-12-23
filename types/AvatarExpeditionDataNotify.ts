// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "AvatarExpeditionDataNotify.proto" (syntax proto3)
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
import { AvatarExpeditionInfo } from "./AvatarExpeditionInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 1632;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message AvatarExpeditionDataNotify
 */
export interface AvatarExpeditionDataNotify {
    /**
     * @generated from protobuf field: map<uint64, AvatarExpeditionInfo> expedition_info_map = 15;
     */
    expeditionInfoMap: {
        [key: string]: AvatarExpeditionInfo;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class AvatarExpeditionDataNotify$Type extends MessageType<AvatarExpeditionDataNotify> {
    constructor() {
        super("AvatarExpeditionDataNotify", [
            { no: 15, name: "expedition_info_map", kind: "map", K: 4 /*ScalarType.UINT64*/, V: { kind: "message", T: () => AvatarExpeditionInfo } }
        ]);
    }
    create(value?: PartialMessage<AvatarExpeditionDataNotify>): AvatarExpeditionDataNotify {
        const message = { expeditionInfoMap: {} };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AvatarExpeditionDataNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AvatarExpeditionDataNotify): AvatarExpeditionDataNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint64, AvatarExpeditionInfo> expedition_info_map */ 15:
                    this.binaryReadMap15(message.expeditionInfoMap, reader, options);
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
    private binaryReadMap15(map: AvatarExpeditionDataNotify["expeditionInfoMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof AvatarExpeditionDataNotify["expeditionInfoMap"] | undefined, val: AvatarExpeditionDataNotify["expeditionInfoMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint64().toString();
                    break;
                case 2:
                    val = AvatarExpeditionInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field AvatarExpeditionDataNotify.expedition_info_map");
            }
        }
        map[key ?? "0"] = val ?? AvatarExpeditionInfo.create();
    }
    internalBinaryWrite(message: AvatarExpeditionDataNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<uint64, AvatarExpeditionInfo> expedition_info_map = 15; */
        for (let k of Object.keys(message.expeditionInfoMap)) {
            writer.tag(15, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint64(k);
            writer.tag(2, WireType.LengthDelimited).fork();
            AvatarExpeditionInfo.internalBinaryWrite(message.expeditionInfoMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarExpeditionDataNotify
 */
export const AvatarExpeditionDataNotify = new AvatarExpeditionDataNotify$Type();
