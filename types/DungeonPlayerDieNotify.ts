// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "DungeonPlayerDieNotify.proto" (syntax proto3)
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
import { PlayerDieType } from "./PlayerDieType";
import { StrengthenPointData } from "./StrengthenPointData";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 927;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message DungeonPlayerDieNotify
 */
export interface DungeonPlayerDieNotify {
    /**
     * @generated from protobuf field: map<uint32, StrengthenPointData> strengthen_point_data_map = 7;
     */
    strengthenPointDataMap: {
        [key: number]: StrengthenPointData;
    };
    /**
     * @generated from protobuf field: PlayerDieType die_type = 8;
     */
    dieType: PlayerDieType;
    /**
     * @generated from protobuf field: uint32 revive_count = 3;
     */
    reviveCount: number;
    /**
     * @generated from protobuf field: uint32 wait_time = 4;
     */
    waitTime: number;
    /**
     * @generated from protobuf field: uint32 dungeon_id = 6;
     */
    dungeonId: number;
    /**
     * @generated from protobuf field: uint32 murderer_entity_id = 11;
     */
    murdererEntityId: number;
    /**
     * @generated from protobuf oneof: entity
     */
    entity: {
        oneofKind: "monsterId";
        /**
         * @generated from protobuf field: uint32 monster_id = 10;
         */
        monsterId: number;
    } | {
        oneofKind: "gadgetId";
        /**
         * @generated from protobuf field: uint32 gadget_id = 14;
         */
        gadgetId: number;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class DungeonPlayerDieNotify$Type extends MessageType<DungeonPlayerDieNotify> {
    constructor() {
        super("DungeonPlayerDieNotify", [
            { no: 7, name: "strengthen_point_data_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => StrengthenPointData } },
            { no: 8, name: "die_type", kind: "enum", T: () => ["PlayerDieType", PlayerDieType, "PLAYER_DIE_TYPE_"] },
            { no: 3, name: "revive_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "wait_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "murderer_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "monster_id", kind: "scalar", oneof: "entity", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "gadget_id", kind: "scalar", oneof: "entity", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<DungeonPlayerDieNotify>): DungeonPlayerDieNotify {
        const message = { strengthenPointDataMap: {}, dieType: 0, reviveCount: 0, waitTime: 0, dungeonId: 0, murdererEntityId: 0, entity: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DungeonPlayerDieNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DungeonPlayerDieNotify): DungeonPlayerDieNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, StrengthenPointData> strengthen_point_data_map */ 7:
                    this.binaryReadMap7(message.strengthenPointDataMap, reader, options);
                    break;
                case /* PlayerDieType die_type */ 8:
                    message.dieType = reader.int32();
                    break;
                case /* uint32 revive_count */ 3:
                    message.reviveCount = reader.uint32();
                    break;
                case /* uint32 wait_time */ 4:
                    message.waitTime = reader.uint32();
                    break;
                case /* uint32 dungeon_id */ 6:
                    message.dungeonId = reader.uint32();
                    break;
                case /* uint32 murderer_entity_id */ 11:
                    message.murdererEntityId = reader.uint32();
                    break;
                case /* uint32 monster_id */ 10:
                    message.entity = {
                        oneofKind: "monsterId",
                        monsterId: reader.uint32()
                    };
                    break;
                case /* uint32 gadget_id */ 14:
                    message.entity = {
                        oneofKind: "gadgetId",
                        gadgetId: reader.uint32()
                    };
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
    private binaryReadMap7(map: DungeonPlayerDieNotify["strengthenPointDataMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof DungeonPlayerDieNotify["strengthenPointDataMap"] | undefined, val: DungeonPlayerDieNotify["strengthenPointDataMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = StrengthenPointData.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field DungeonPlayerDieNotify.strengthen_point_data_map");
            }
        }
        map[key ?? 0] = val ?? StrengthenPointData.create();
    }
    internalBinaryWrite(message: DungeonPlayerDieNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<uint32, StrengthenPointData> strengthen_point_data_map = 7; */
        for (let k of Object.keys(message.strengthenPointDataMap)) {
            writer.tag(7, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k));
            writer.tag(2, WireType.LengthDelimited).fork();
            StrengthenPointData.internalBinaryWrite(message.strengthenPointDataMap[k as any], writer, options);
            writer.join().join();
        }
        /* PlayerDieType die_type = 8; */
        if (message.dieType !== 0)
            writer.tag(8, WireType.Varint).int32(message.dieType);
        /* uint32 revive_count = 3; */
        if (message.reviveCount !== 0)
            writer.tag(3, WireType.Varint).uint32(message.reviveCount);
        /* uint32 wait_time = 4; */
        if (message.waitTime !== 0)
            writer.tag(4, WireType.Varint).uint32(message.waitTime);
        /* uint32 dungeon_id = 6; */
        if (message.dungeonId !== 0)
            writer.tag(6, WireType.Varint).uint32(message.dungeonId);
        /* uint32 murderer_entity_id = 11; */
        if (message.murdererEntityId !== 0)
            writer.tag(11, WireType.Varint).uint32(message.murdererEntityId);
        /* uint32 monster_id = 10; */
        if (message.entity.oneofKind === "monsterId")
            writer.tag(10, WireType.Varint).uint32(message.entity.monsterId);
        /* uint32 gadget_id = 14; */
        if (message.entity.oneofKind === "gadgetId")
            writer.tag(14, WireType.Varint).uint32(message.entity.gadgetId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DungeonPlayerDieNotify
 */
export const DungeonPlayerDieNotify = new DungeonPlayerDieNotify$Type();
