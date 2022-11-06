// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "cmd_regional_play.proto" (package "com.midnights.game", syntax proto3)
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
 * @generated from protobuf message com.midnights.game.RegionalPlayVar
 */
export interface RegionalPlayVar {
    /**
     * @generated from protobuf field: optional uint32 type = 15;
     */
    type?: number;
    /**
     * @generated from protobuf field: optional float max_value = 11;
     */
    maxValue?: number;
    /**
     * @generated from protobuf field: optional float value = 3;
     */
    value?: number;
    /**
     * @generated from protobuf field: optional float base_value = 10;
     */
    baseValue?: number;
}
/**
 * @generated from protobuf message com.midnights.game.RegionalPlayInfoNotify
 */
export interface RegionalPlayInfoNotify {
    /**
     * @generated from protobuf field: repeated com.midnights.game.RegionalPlayVar var_list = 5;
     */
    varList: RegionalPlayVar[];
    /**
     * @generated from protobuf field: optional string play_name = 9;
     */
    playName?: string;
    /**
     * @generated from protobuf field: optional bool is_enabled = 15;
     */
    isEnabled?: boolean;
    /**
     * @generated from protobuf field: optional uint32 play_type = 7;
     */
    playType?: number;
    /**
     * @generated from protobuf field: optional bool is_in_region = 4;
     */
    isInRegion?: boolean;
}
/**
 * @generated from protobuf enum com.midnights.game.RegionalPlayInfoNotify.CmdId
 */
export enum RegionalPlayInfoNotify_CmdId {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: CMD_ID = 6276;
     */
    CMD_ID = 6276,
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ENET_CHANNEL_ID = 0,
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ENET_IS_RELIABLE = 1
}
/**
 * @generated from protobuf message com.midnights.game.DeathZoneInfo
 */
export interface DeathZoneInfo {
    /**
     * @generated from protobuf field: optional bool is_open = 9;
     */
    isOpen?: boolean;
    /**
     * @generated from protobuf field: optional uint32 id = 14;
     */
    id?: number;
}
/**
 * @generated from protobuf message com.midnights.game.DeathZoneInfoNotify
 */
export interface DeathZoneInfoNotify {
    /**
     * @generated from protobuf field: repeated com.midnights.game.DeathZoneInfo death_zone_info_list = 8;
     */
    deathZoneInfoList: DeathZoneInfo[];
}
/**
 * @generated from protobuf enum com.midnights.game.DeathZoneInfoNotify.CmdId
 */
export enum DeathZoneInfoNotify_CmdId {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: CMD_ID = 6268;
     */
    CMD_ID = 6268,
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ENET_CHANNEL_ID = 0,
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ENET_IS_RELIABLE = 1
}
/**
 * @generated from protobuf message com.midnights.game.PlayerDeathZoneNotify
 */
export interface PlayerDeathZoneNotify {
    /**
     * @generated from protobuf field: optional uint32 cur_death_zone_id = 8;
     */
    curDeathZoneId?: number;
}
/**
 * @generated from protobuf enum com.midnights.game.PlayerDeathZoneNotify.CmdId
 */
export enum PlayerDeathZoneNotify_CmdId {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: CMD_ID = 6275;
     */
    CMD_ID = 6275,
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    ENET_CHANNEL_ID = 0,
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ENET_IS_RELIABLE = 1
}
// @generated message type with reflection information, may provide speed optimized methods
class RegionalPlayVar$Type extends MessageType<RegionalPlayVar> {
    constructor() {
        super("com.midnights.game.RegionalPlayVar", [
            { no: 15, name: "type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "max_value", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "value", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 10, name: "base_value", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value?: PartialMessage<RegionalPlayVar>): RegionalPlayVar {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RegionalPlayVar>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RegionalPlayVar): RegionalPlayVar {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 type */ 15:
                    message.type = reader.uint32();
                    break;
                case /* optional float max_value */ 11:
                    message.maxValue = reader.float();
                    break;
                case /* optional float value */ 3:
                    message.value = reader.float();
                    break;
                case /* optional float base_value */ 10:
                    message.baseValue = reader.float();
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
    internalBinaryWrite(message: RegionalPlayVar, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint32 type = 15; */
        if (message.type !== undefined)
            writer.tag(15, WireType.Varint).uint32(message.type);
        /* optional float max_value = 11; */
        if (message.maxValue !== undefined)
            writer.tag(11, WireType.Bit32).float(message.maxValue);
        /* optional float value = 3; */
        if (message.value !== undefined)
            writer.tag(3, WireType.Bit32).float(message.value);
        /* optional float base_value = 10; */
        if (message.baseValue !== undefined)
            writer.tag(10, WireType.Bit32).float(message.baseValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RegionalPlayVar
 */
export const RegionalPlayVar = new RegionalPlayVar$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RegionalPlayInfoNotify$Type extends MessageType<RegionalPlayInfoNotify> {
    constructor() {
        super("com.midnights.game.RegionalPlayInfoNotify", [
            { no: 5, name: "var_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RegionalPlayVar },
            { no: 9, name: "play_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "is_enabled", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "play_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_in_region", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<RegionalPlayInfoNotify>): RegionalPlayInfoNotify {
        const message = { varList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RegionalPlayInfoNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RegionalPlayInfoNotify): RegionalPlayInfoNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.RegionalPlayVar var_list */ 5:
                    message.varList.push(RegionalPlayVar.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional string play_name */ 9:
                    message.playName = reader.string();
                    break;
                case /* optional bool is_enabled */ 15:
                    message.isEnabled = reader.bool();
                    break;
                case /* optional uint32 play_type */ 7:
                    message.playType = reader.uint32();
                    break;
                case /* optional bool is_in_region */ 4:
                    message.isInRegion = reader.bool();
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
    internalBinaryWrite(message: RegionalPlayInfoNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated com.midnights.game.RegionalPlayVar var_list = 5; */
        for (let i = 0; i < message.varList.length; i++)
            RegionalPlayVar.internalBinaryWrite(message.varList[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* optional string play_name = 9; */
        if (message.playName !== undefined)
            writer.tag(9, WireType.LengthDelimited).string(message.playName);
        /* optional bool is_enabled = 15; */
        if (message.isEnabled !== undefined)
            writer.tag(15, WireType.Varint).bool(message.isEnabled);
        /* optional uint32 play_type = 7; */
        if (message.playType !== undefined)
            writer.tag(7, WireType.Varint).uint32(message.playType);
        /* optional bool is_in_region = 4; */
        if (message.isInRegion !== undefined)
            writer.tag(4, WireType.Varint).bool(message.isInRegion);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RegionalPlayInfoNotify
 */
export const RegionalPlayInfoNotify = new RegionalPlayInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeathZoneInfo$Type extends MessageType<DeathZoneInfo> {
    constructor() {
        super("com.midnights.game.DeathZoneInfo", [
            { no: 9, name: "is_open", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<DeathZoneInfo>): DeathZoneInfo {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DeathZoneInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeathZoneInfo): DeathZoneInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional bool is_open */ 9:
                    message.isOpen = reader.bool();
                    break;
                case /* optional uint32 id */ 14:
                    message.id = reader.uint32();
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
    internalBinaryWrite(message: DeathZoneInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional bool is_open = 9; */
        if (message.isOpen !== undefined)
            writer.tag(9, WireType.Varint).bool(message.isOpen);
        /* optional uint32 id = 14; */
        if (message.id !== undefined)
            writer.tag(14, WireType.Varint).uint32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DeathZoneInfo
 */
export const DeathZoneInfo = new DeathZoneInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeathZoneInfoNotify$Type extends MessageType<DeathZoneInfoNotify> {
    constructor() {
        super("com.midnights.game.DeathZoneInfoNotify", [
            { no: 8, name: "death_zone_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DeathZoneInfo }
        ]);
    }
    create(value?: PartialMessage<DeathZoneInfoNotify>): DeathZoneInfoNotify {
        const message = { deathZoneInfoList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DeathZoneInfoNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeathZoneInfoNotify): DeathZoneInfoNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.DeathZoneInfo death_zone_info_list */ 8:
                    message.deathZoneInfoList.push(DeathZoneInfo.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: DeathZoneInfoNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated com.midnights.game.DeathZoneInfo death_zone_info_list = 8; */
        for (let i = 0; i < message.deathZoneInfoList.length; i++)
            DeathZoneInfo.internalBinaryWrite(message.deathZoneInfoList[i], writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DeathZoneInfoNotify
 */
export const DeathZoneInfoNotify = new DeathZoneInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerDeathZoneNotify$Type extends MessageType<PlayerDeathZoneNotify> {
    constructor() {
        super("com.midnights.game.PlayerDeathZoneNotify", [
            { no: 8, name: "cur_death_zone_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<PlayerDeathZoneNotify>): PlayerDeathZoneNotify {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlayerDeathZoneNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerDeathZoneNotify): PlayerDeathZoneNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 cur_death_zone_id */ 8:
                    message.curDeathZoneId = reader.uint32();
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
    internalBinaryWrite(message: PlayerDeathZoneNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint32 cur_death_zone_id = 8; */
        if (message.curDeathZoneId !== undefined)
            writer.tag(8, WireType.Varint).uint32(message.curDeathZoneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerDeathZoneNotify
 */
export const PlayerDeathZoneNotify = new PlayerDeathZoneNotify$Type();
