// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,output_typescript
// @generated from protobuf file "AbilityAppliedAbility.proto" (package "com.midnights.game", syntax proto3)
// tslint:disable
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
import { AbilityScalarValueEntry } from "./AbilityScalarValueEntry";
import { AbilityString } from "./AbilityString";
/**
 * @generated from protobuf message com.midnights.game.AbilityAppliedAbility
 */
export interface AbilityAppliedAbility {
    /**
     * @generated from protobuf field: optional com.midnights.game.AbilityString ability_name = 1;
     */
    abilityName?: AbilityString;
    /**
     * @generated from protobuf field: optional com.midnights.game.AbilityString ability_override = 2;
     */
    abilityOverride?: AbilityString;
    /**
     * @generated from protobuf field: repeated com.midnights.game.AbilityScalarValueEntry override_map = 3;
     */
    overrideMap: AbilityScalarValueEntry[];
    /**
     * @generated from protobuf field: optional uint32 instanced_ability_id = 4;
     */
    instancedAbilityId?: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class AbilityAppliedAbility$Type extends MessageType<AbilityAppliedAbility> {
    constructor() {
        super("com.midnights.game.AbilityAppliedAbility", [
            { no: 1, name: "ability_name", kind: "message", T: () => AbilityString },
            { no: 2, name: "ability_override", kind: "message", T: () => AbilityString },
            { no: 3, name: "override_map", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AbilityScalarValueEntry },
            { no: 4, name: "instanced_ability_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<AbilityAppliedAbility>): AbilityAppliedAbility {
        const message = { overrideMap: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AbilityAppliedAbility>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AbilityAppliedAbility): AbilityAppliedAbility {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.AbilityString ability_name */ 1:
                    message.abilityName = AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.abilityName);
                    break;
                case /* optional com.midnights.game.AbilityString ability_override */ 2:
                    message.abilityOverride = AbilityString.internalBinaryRead(reader, reader.uint32(), options, message.abilityOverride);
                    break;
                case /* repeated com.midnights.game.AbilityScalarValueEntry override_map */ 3:
                    message.overrideMap.push(AbilityScalarValueEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional uint32 instanced_ability_id */ 4:
                    message.instancedAbilityId = reader.uint32();
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
    internalBinaryWrite(message: AbilityAppliedAbility, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional com.midnights.game.AbilityString ability_name = 1; */
        if (message.abilityName)
            AbilityString.internalBinaryWrite(message.abilityName, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* optional com.midnights.game.AbilityString ability_override = 2; */
        if (message.abilityOverride)
            AbilityString.internalBinaryWrite(message.abilityOverride, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated com.midnights.game.AbilityScalarValueEntry override_map = 3; */
        for (let i = 0; i < message.overrideMap.length; i++)
            AbilityScalarValueEntry.internalBinaryWrite(message.overrideMap[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 instanced_ability_id = 4; */
        if (message.instancedAbilityId !== undefined)
            writer.tag(4, WireType.Varint).uint32(message.instancedAbilityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityAppliedAbility
 */
export const AbilityAppliedAbility = new AbilityAppliedAbility$Type();
