// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,output_typescript
// @generated from protobuf file "AvatarExcelInfo.proto" (package "com.midnights.game", syntax proto3)
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
/**
 * @generated from protobuf message com.midnights.game.AvatarExcelInfo
 */
export interface AvatarExcelInfo {
    /**
     * @generated from protobuf field: optional uint64 prefab_path_hash = 1;
     */
    prefabPathHash?: bigint;
    /**
     * @generated from protobuf field: optional uint64 prefab_path_remote_hash = 2;
     */
    prefabPathRemoteHash?: bigint;
    /**
     * @generated from protobuf field: optional uint64 controller_path_hash = 3;
     */
    controllerPathHash?: bigint;
    /**
     * @generated from protobuf field: optional uint64 controller_path_remote_hash = 4;
     */
    controllerPathRemoteHash?: bigint;
    /**
     * @generated from protobuf field: optional uint64 combat_config_hash = 5;
     */
    combatConfigHash?: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class AvatarExcelInfo$Type extends MessageType<AvatarExcelInfo> {
    constructor() {
        super("com.midnights.game.AvatarExcelInfo", [
            { no: 1, name: "prefab_path_hash", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "prefab_path_remote_hash", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "controller_path_hash", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "controller_path_remote_hash", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "combat_config_hash", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<AvatarExcelInfo>): AvatarExcelInfo {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AvatarExcelInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AvatarExcelInfo): AvatarExcelInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint64 prefab_path_hash */ 1:
                    message.prefabPathHash = reader.uint64().toBigInt();
                    break;
                case /* optional uint64 prefab_path_remote_hash */ 2:
                    message.prefabPathRemoteHash = reader.uint64().toBigInt();
                    break;
                case /* optional uint64 controller_path_hash */ 3:
                    message.controllerPathHash = reader.uint64().toBigInt();
                    break;
                case /* optional uint64 controller_path_remote_hash */ 4:
                    message.controllerPathRemoteHash = reader.uint64().toBigInt();
                    break;
                case /* optional uint64 combat_config_hash */ 5:
                    message.combatConfigHash = reader.uint64().toBigInt();
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
    internalBinaryWrite(message: AvatarExcelInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint64 prefab_path_hash = 1; */
        if (message.prefabPathHash !== undefined)
            writer.tag(1, WireType.Varint).uint64(message.prefabPathHash);
        /* optional uint64 prefab_path_remote_hash = 2; */
        if (message.prefabPathRemoteHash !== undefined)
            writer.tag(2, WireType.Varint).uint64(message.prefabPathRemoteHash);
        /* optional uint64 controller_path_hash = 3; */
        if (message.controllerPathHash !== undefined)
            writer.tag(3, WireType.Varint).uint64(message.controllerPathHash);
        /* optional uint64 controller_path_remote_hash = 4; */
        if (message.controllerPathRemoteHash !== undefined)
            writer.tag(4, WireType.Varint).uint64(message.controllerPathRemoteHash);
        /* optional uint64 combat_config_hash = 5; */
        if (message.combatConfigHash !== undefined)
            writer.tag(5, WireType.Varint).uint64(message.combatConfigHash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarExcelInfo
 */
export const AvatarExcelInfo = new AvatarExcelInfo$Type();
