"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LuaSetOptionNotify = exports.LuaSetOptionNotify_LuaOptionType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum LuaSetOptionNotify.LuaOptionType
 */
var LuaSetOptionNotify_LuaOptionType;
(function (LuaSetOptionNotify_LuaOptionType) {
    /**
     * @generated from protobuf enum value: LUA_OPTION_TYPE_NONE = 0;
     */
    LuaSetOptionNotify_LuaOptionType[LuaSetOptionNotify_LuaOptionType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: LUA_OPTION_TYPE_PLAYER_INPUT = 1;
     */
    LuaSetOptionNotify_LuaOptionType[LuaSetOptionNotify_LuaOptionType["PLAYER_INPUT"] = 1] = "PLAYER_INPUT";
})(LuaSetOptionNotify_LuaOptionType = exports.LuaSetOptionNotify_LuaOptionType || (exports.LuaSetOptionNotify_LuaOptionType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class LuaSetOptionNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("LuaSetOptionNotify", [
            { no: 1, name: "lua_set_param", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "option_type", kind: "enum", T: () => ["LuaSetOptionNotify.LuaOptionType", LuaSetOptionNotify_LuaOptionType, "LUA_OPTION_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { luaSetParam: "", optionType: 0 };
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
                case /* string lua_set_param */ 1:
                    message.luaSetParam = reader.string();
                    break;
                case /* LuaSetOptionNotify.LuaOptionType option_type */ 7:
                    message.optionType = reader.int32();
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
        /* string lua_set_param = 1; */
        if (message.luaSetParam !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.luaSetParam);
        /* LuaSetOptionNotify.LuaOptionType option_type = 7; */
        if (message.optionType !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.optionType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LuaSetOptionNotify
 */
exports.LuaSetOptionNotify = new LuaSetOptionNotify$Type();
