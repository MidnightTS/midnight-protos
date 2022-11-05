"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarExcelInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarExcelInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AvatarExcelInfo", [
            { no: 1, name: "prefab_path_hash", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "prefab_path_remote_hash", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "controller_path_hash", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "controller_path_remote_hash", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "combat_config_hash", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint64 prefab_path_hash = 1; */
        if (message.prefabPathHash !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.prefabPathHash);
        /* optional uint64 prefab_path_remote_hash = 2; */
        if (message.prefabPathRemoteHash !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.prefabPathRemoteHash);
        /* optional uint64 controller_path_hash = 3; */
        if (message.controllerPathHash !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.controllerPathHash);
        /* optional uint64 controller_path_remote_hash = 4; */
        if (message.controllerPathRemoteHash !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.controllerPathRemoteHash);
        /* optional uint64 combat_config_hash = 5; */
        if (message.combatConfigHash !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.combatConfigHash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AvatarExcelInfo
 */
exports.AvatarExcelInfo = new AvatarExcelInfo$Type();
