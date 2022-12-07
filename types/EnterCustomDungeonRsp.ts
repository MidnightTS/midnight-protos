// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "EnterCustomDungeonRsp.proto" (syntax proto3)
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
import { CustomDungeon } from "./CustomDungeon";
import { EnterCustomDungeonType } from "./EnterCustomDungeonType";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 6241;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message EnterCustomDungeonRsp
 */
export interface EnterCustomDungeonRsp {
    /**
     * @generated from protobuf field: map<uint32, uint32> room_cost_map = 3;
     */
    roomCostMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: EnterCustomDungeonType enter_type = 15;
     */
    enterType: EnterCustomDungeonType;
    /**
     * @generated from protobuf field: CustomDungeon custom_dungeon = 12;
     */
    customDungeon?: CustomDungeon;
    /**
     * @generated from protobuf field: int32 retcode = 8;
     */
    retcode: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class EnterCustomDungeonRsp$Type extends MessageType<EnterCustomDungeonRsp> {
    constructor() {
        super("EnterCustomDungeonRsp", [
            { no: 3, name: "room_cost_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 15, name: "enter_type", kind: "enum", T: () => ["EnterCustomDungeonType", EnterCustomDungeonType, "ENTER_CUSTOM_DUNGEON_TYPE_"] },
            { no: 12, name: "custom_dungeon", kind: "message", T: () => CustomDungeon },
            { no: 8, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<EnterCustomDungeonRsp>): EnterCustomDungeonRsp {
        const message = { roomCostMap: {}, enterType: 0, retcode: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EnterCustomDungeonRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EnterCustomDungeonRsp): EnterCustomDungeonRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> room_cost_map */ 3:
                    this.binaryReadMap3(message.roomCostMap, reader, options);
                    break;
                case /* EnterCustomDungeonType enter_type */ 15:
                    message.enterType = reader.int32();
                    break;
                case /* CustomDungeon custom_dungeon */ 12:
                    message.customDungeon = CustomDungeon.internalBinaryRead(reader, reader.uint32(), options, message.customDungeon);
                    break;
                case /* int32 retcode */ 8:
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
    private binaryReadMap3(map: EnterCustomDungeonRsp["roomCostMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof EnterCustomDungeonRsp["roomCostMap"] | undefined, val: EnterCustomDungeonRsp["roomCostMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field EnterCustomDungeonRsp.room_cost_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: EnterCustomDungeonRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<uint32, uint32> room_cost_map = 3; */
        for (let k of Object.keys(message.roomCostMap))
            writer.tag(3, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.roomCostMap[k as any]).join();
        /* EnterCustomDungeonType enter_type = 15; */
        if (message.enterType !== 0)
            writer.tag(15, WireType.Varint).int32(message.enterType);
        /* CustomDungeon custom_dungeon = 12; */
        if (message.customDungeon)
            CustomDungeon.internalBinaryWrite(message.customDungeon, writer.tag(12, WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 8; */
        if (message.retcode !== 0)
            writer.tag(8, WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EnterCustomDungeonRsp
 */
export const EnterCustomDungeonRsp = new EnterCustomDungeonRsp$Type();