// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "AbilityMixinRecoverInfo.proto" (syntax proto3)
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
import { BreakoutSnapShot } from "./BreakoutSnapShot";
import { MassivePropSyncInfo } from "./MassivePropSyncInfo";
/**
 * @generated from protobuf message AbilityMixinRecoverInfo
 */
export interface AbilityMixinRecoverInfo {
    /**
     * @generated from protobuf field: uint32 local_id = 3;
     */
    localId: number;
    /**
     * @generated from protobuf field: repeated uint32 data_list = 4;
     */
    dataList: number[];
    /**
     * @generated from protobuf field: bool is_serverbuff_modifier = 5;
     */
    isServerbuffModifier: boolean;
    /**
     * @generated from protobuf field: repeated MassivePropSyncInfo massive_prop_list = 6;
     */
    massivePropList: MassivePropSyncInfo[];
    /**
     * @generated from protobuf field: BreakoutSnapShot breakout_snap_shot = 7;
     */
    breakoutSnapShot?: BreakoutSnapShot;
    /**
     * @generated from protobuf oneof: source
     */
    source: {
        oneofKind: "instancedAbilityId";
        /**
         * @generated from protobuf field: uint32 instanced_ability_id = 1;
         */
        instancedAbilityId: number;
    } | {
        oneofKind: "instancedModifierId";
        /**
         * @generated from protobuf field: uint32 instanced_modifier_id = 2;
         */
        instancedModifierId: number;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinRecoverInfo$Type extends MessageType<AbilityMixinRecoverInfo> {
    constructor() {
        super("AbilityMixinRecoverInfo", [
            { no: 3, name: "local_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "data_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_serverbuff_modifier", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "massive_prop_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MassivePropSyncInfo },
            { no: 7, name: "breakout_snap_shot", kind: "message", T: () => BreakoutSnapShot },
            { no: 1, name: "instanced_ability_id", kind: "scalar", oneof: "source", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "instanced_modifier_id", kind: "scalar", oneof: "source", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<AbilityMixinRecoverInfo>): AbilityMixinRecoverInfo {
        const message = { localId: 0, dataList: [], isServerbuffModifier: false, massivePropList: [], source: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AbilityMixinRecoverInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AbilityMixinRecoverInfo): AbilityMixinRecoverInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 local_id */ 3:
                    message.localId = reader.uint32();
                    break;
                case /* repeated uint32 data_list */ 4:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.dataList.push(reader.uint32());
                    else
                        message.dataList.push(reader.uint32());
                    break;
                case /* bool is_serverbuff_modifier */ 5:
                    message.isServerbuffModifier = reader.bool();
                    break;
                case /* repeated MassivePropSyncInfo massive_prop_list */ 6:
                    message.massivePropList.push(MassivePropSyncInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* BreakoutSnapShot breakout_snap_shot */ 7:
                    message.breakoutSnapShot = BreakoutSnapShot.internalBinaryRead(reader, reader.uint32(), options, message.breakoutSnapShot);
                    break;
                case /* uint32 instanced_ability_id */ 1:
                    message.source = {
                        oneofKind: "instancedAbilityId",
                        instancedAbilityId: reader.uint32()
                    };
                    break;
                case /* uint32 instanced_modifier_id */ 2:
                    message.source = {
                        oneofKind: "instancedModifierId",
                        instancedModifierId: reader.uint32()
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
    internalBinaryWrite(message: AbilityMixinRecoverInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 local_id = 3; */
        if (message.localId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.localId);
        /* repeated uint32 data_list = 4; */
        if (message.dataList.length) {
            writer.tag(4, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.dataList.length; i++)
                writer.uint32(message.dataList[i]);
            writer.join();
        }
        /* bool is_serverbuff_modifier = 5; */
        if (message.isServerbuffModifier !== false)
            writer.tag(5, WireType.Varint).bool(message.isServerbuffModifier);
        /* repeated MassivePropSyncInfo massive_prop_list = 6; */
        for (let i = 0; i < message.massivePropList.length; i++)
            MassivePropSyncInfo.internalBinaryWrite(message.massivePropList[i], writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* BreakoutSnapShot breakout_snap_shot = 7; */
        if (message.breakoutSnapShot)
            BreakoutSnapShot.internalBinaryWrite(message.breakoutSnapShot, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* uint32 instanced_ability_id = 1; */
        if (message.source.oneofKind === "instancedAbilityId")
            writer.tag(1, WireType.Varint).uint32(message.source.instancedAbilityId);
        /* uint32 instanced_modifier_id = 2; */
        if (message.source.oneofKind === "instancedModifierId")
            writer.tag(2, WireType.Varint).uint32(message.source.instancedModifierId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMixinRecoverInfo
 */
export const AbilityMixinRecoverInfo = new AbilityMixinRecoverInfo$Type();
