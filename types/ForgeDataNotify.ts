// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "ForgeDataNotify.proto" (syntax proto3)
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
import { ForgeQueueData } from "./ForgeQueueData";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 674;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message ForgeDataNotify
 */
export interface ForgeDataNotify {
    /**
     * @generated from protobuf field: repeated uint32 forge_id_list = 13;
     */
    forgeIdList: number[];
    /**
     * @generated from protobuf field: map<uint32, ForgeQueueData> forge_queue_map = 8;
     */
    forgeQueueMap: {
        [key: number]: ForgeQueueData;
    };
    /**
     * @generated from protobuf field: uint32 max_queue_num = 11;
     */
    maxQueueNum: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ForgeDataNotify$Type extends MessageType<ForgeDataNotify> {
    constructor() {
        super("ForgeDataNotify", [
            { no: 13, name: "forge_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "forge_queue_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => ForgeQueueData } },
            { no: 11, name: "max_queue_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<ForgeDataNotify>): ForgeDataNotify {
        const message = { forgeIdList: [], forgeQueueMap: {}, maxQueueNum: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ForgeDataNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ForgeDataNotify): ForgeDataNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 forge_id_list */ 13:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.forgeIdList.push(reader.uint32());
                    else
                        message.forgeIdList.push(reader.uint32());
                    break;
                case /* map<uint32, ForgeQueueData> forge_queue_map */ 8:
                    this.binaryReadMap8(message.forgeQueueMap, reader, options);
                    break;
                case /* uint32 max_queue_num */ 11:
                    message.maxQueueNum = reader.uint32();
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
    private binaryReadMap8(map: ForgeDataNotify["forgeQueueMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof ForgeDataNotify["forgeQueueMap"] | undefined, val: ForgeDataNotify["forgeQueueMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = ForgeQueueData.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field ForgeDataNotify.forge_queue_map");
            }
        }
        map[key ?? 0] = val ?? ForgeQueueData.create();
    }
    internalBinaryWrite(message: ForgeDataNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint32 forge_id_list = 13; */
        if (message.forgeIdList.length) {
            writer.tag(13, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.forgeIdList.length; i++)
                writer.uint32(message.forgeIdList[i]);
            writer.join();
        }
        /* map<uint32, ForgeQueueData> forge_queue_map = 8; */
        for (let k of Object.keys(message.forgeQueueMap)) {
            writer.tag(8, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k));
            writer.tag(2, WireType.LengthDelimited).fork();
            ForgeQueueData.internalBinaryWrite(message.forgeQueueMap[k as any], writer, options);
            writer.join().join();
        }
        /* uint32 max_queue_num = 11; */
        if (message.maxQueueNum !== 0)
            writer.tag(11, WireType.Varint).uint32(message.maxQueueNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ForgeDataNotify
 */
export const ForgeDataNotify = new ForgeDataNotify$Type();
