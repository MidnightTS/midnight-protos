// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,output_typescript
// @generated from protobuf file "AbilityMixinRecoverInfo.proto" (package "com.midnights.game", syntax proto3)
// tslint:disable
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
import { MassivePropSyncInfo } from "./MassivePropSyncInfo";
/**
 * @generated from protobuf message com.midnights.game.AbilityMixinRecoverInfo
 */
export interface AbilityMixinRecoverInfo {
    /**
     * @generated from protobuf field: optional uint32 local_id = 3;
     */
    localId?: number;
    /**
     * @generated from protobuf field: repeated uint32 data_list = 4;
     */
    dataList: number[];
    /**
     * @generated from protobuf field: optional bool is_serverbuff_modifier = 5;
     */
    isServerbuffModifier?: boolean;
    /**
     * @generated from protobuf field: repeated com.midnights.game.MassivePropSyncInfo massive_prop_list = 6;
     */
    massivePropList: MassivePropSyncInfo[];
    /**
     * @generated from protobuf oneof: Source
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
        super("com.midnights.game.AbilityMixinRecoverInfo", [
            { no: 3, name: "local_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "data_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "is_serverbuff_modifier", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "massive_prop_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MassivePropSyncInfo },
            { no: 1, name: "instanced_ability_id", kind: "scalar", oneof: "source", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "instanced_modifier_id", kind: "scalar", oneof: "source", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<AbilityMixinRecoverInfo>): AbilityMixinRecoverInfo {
        const message = { dataList: [], massivePropList: [], source: { oneofKind: undefined } };
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
                case /* optional uint32 local_id */ 3:
                    message.localId = reader.uint32();
                    break;
                case /* repeated uint32 data_list */ 4:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.dataList.push(reader.uint32());
                    else
                        message.dataList.push(reader.uint32());
                    break;
                case /* optional bool is_serverbuff_modifier */ 5:
                    message.isServerbuffModifier = reader.bool();
                    break;
                case /* repeated com.midnights.game.MassivePropSyncInfo massive_prop_list */ 6:
                    message.massivePropList.push(MassivePropSyncInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* optional uint32 local_id = 3; */
        if (message.localId !== undefined)
            writer.tag(3, WireType.Varint).uint32(message.localId);
        /* repeated uint32 data_list = 4; */
        if (message.dataList.length) {
            writer.tag(4, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.dataList.length; i++)
                writer.uint32(message.dataList[i]);
            writer.join();
        }
        /* optional bool is_serverbuff_modifier = 5; */
        if (message.isServerbuffModifier !== undefined)
            writer.tag(5, WireType.Varint).bool(message.isServerbuffModifier);
        /* repeated com.midnights.game.MassivePropSyncInfo massive_prop_list = 6; */
        for (let i = 0; i < message.massivePropList.length; i++)
            MassivePropSyncInfo.internalBinaryWrite(message.massivePropList[i], writer.tag(6, WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message com.midnights.game.AbilityMixinRecoverInfo
 */
export const AbilityMixinRecoverInfo = new AbilityMixinRecoverInfo$Type();
