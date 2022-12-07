"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerLuaShellNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const LuaShellType_1 = require("./LuaShellType");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerLuaShellNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerLuaShellNotify", [
            { no: 8, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "shell_type", kind: "enum", T: () => ["LuaShellType", LuaShellType_1.LuaShellType, "LUA_SHELL_TYPE_"] },
            { no: 4, name: "lua_shell", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "use_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { id: 0, shellType: 0, luaShell: new Uint8Array(0), useType: 0 };
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
                case /* uint32 id */ 8:
                    message.id = reader.uint32();
                    break;
                case /* LuaShellType shell_type */ 1:
                    message.shellType = reader.int32();
                    break;
                case /* bytes lua_shell */ 4:
                    message.luaShell = reader.bytes();
                    break;
                case /* uint32 use_type */ 2:
                    message.useType = reader.uint32();
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
        /* uint32 id = 8; */
        if (message.id !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.id);
        /* LuaShellType shell_type = 1; */
        if (message.shellType !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.shellType);
        /* bytes lua_shell = 4; */
        if (message.luaShell.length)
            writer.tag(4, runtime_1.WireType.LengthDelimited).bytes(message.luaShell);
        /* uint32 use_type = 2; */
        if (message.useType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.useType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerLuaShellNotify
 */
exports.PlayerLuaShellNotify = new PlayerLuaShellNotify$Type();
